Excellent. As a senior technical architect, my focus is on creating a blueprint for execution, not a rigid prescription. This refined TRD eliminates premature specifics like directory structures and focuses on the architectural decisions, data flow, and core logic necessary to build the Vision3 MVP.

This document is the actionable technical counterpart to the PRD.

---

# **Refined Technical Requirements Document (TRD) - Vision3 MVP**

## 1. Guiding Principles

-   **Serverless-First:** Leverage managed services (Vercel, Supabase, Gemini) to minimize infrastructure overhead and maximize development velocity.
-   **Pragmatic & Lean:** The architecture must directly serve the MVP features. Avoid premature optimization or complexity.
-   **Asynchronous Core:** The primary AI generation flow is time-intensive. The system must be designed asynchronously to provide a responsive user experience.

## 2. Core Technology Stack

-   **Frontend:** Next.js 15 (App Router), TypeScript, React Query, shadcn/ui
-   **Authentication:** Clerk (Managed, JWT-based)
-   **Backend & API:** Next.js API Routes / Vercel Serverless Functions
-   **Database:** Supabase (Postgres with Row Level Security)
-   **AI Services:** Google Gemini Pro (for orchestrating concepts and text) & a supporting Image Generation Model API (e.g., Stable Diffusion API, DALL-E 3).
-   **Payments:** LemonSqueezy (via Webhooks)

## 3. High-Level System Architecture

The system operates on a simple, decoupled client-server model. The frontend is a SPA responsible for UI, while the backend handles business logic, database interaction, and AI orchestration.

```
+----------------+      +------------------+      +-------------------+
|   User Browser |----->|   Clerk (Auth)   |----->| Next.js Frontend  |
| (Next.js App)  |      +------------------+      | (Vercel)          |
+----------------+                                +---------+---------+
                                                            | (API Calls w/ JWT)
                                                            v
+-----------------------------------------------------------+----------------------------------------------------------+
|                                           Backend Logic (Vercel Serverless Functions)                                |
|                                                                                                                        |
| +-------------------------+      +--------------------------+      +---------------------+     +--------------------+ |
| |   API Endpoint Handlers |----->| AI Generation Orchestrator |----->|  Gemini Pro API     |---->| Image Gen API      | |
| | (e.g., /api/generate)   |      | (Async Task)             |      | (Concepts, Titles)  |     | (Visuals)        | |
| +-------------------------+      +--------------------------+      +---------------------+     +--------------------+ |
|            |                                   |                                                                     |
|            | (CRUD Operations)                 | (Store Results)                                                     |
|            v                                   v                                                                     |
| +-------------------------------------------------+                                                                  |
| |               Supabase (Postgres DB)            |                                                                  |
| | (Data Storage, RLS, File Storage for Images)    |                                                                  |
| +-------------------------------------------------+                                                                  |
+----------------------------------------------------------------------------------------------------------------------+
```

## 4. Data Model (Core Supabase Schema)

This schema is the minimum required for MVP functionality. All tables will be protected by RLS policies.

-   **`users`**
    -   `id`: `uuid` (Primary Key, references `auth.users`)
    -   `clerk_id`: `text` (Unique, from Clerk)
    -   `email`: `text`
    -   `subscription_tier`: `text` (e.g., 'free', 'starter', 'pro')
    -   `credits_remaining`: `integer`
    -   `created_at`: `timestamp`

-   **`generations`**
    -   `id`: `uuid` (Primary Key)
    -   `user_id`: `uuid` (Foreign Key to `users.id`)
    -   `type`: `text` (Enum: 'THUMBNAIL', 'TITLE')
    -   `status`: `text` (Enum: 'PENDING', 'COMPLETED', 'FAILED')
    -   `user_prompt`: `text` (The user's initial input)
    -   `created_at`: `timestamp`

-   **`artifacts`**
    -   `id`: `uuid` (Primary Key)
    -   `generation_id`: `uuid` (Foreign Key to `generations.id`)
    -   `type`: `text` (Enum: 'IMAGE', 'TEXT')
    -   `content`: `text` (For titles, this is the text. For images, this is the URL from Supabase Storage.)
    -   `metadata`: `jsonb` (Optional: e.g., resolution, edit history)
    -   `created_at`: `timestamp`

## 5. Core User Flows & API Design

### Flow 1: Thumbnail & Title Generation (Asynchronous)

1.  **Client-Side:** User types a prompt in the chat UI and submits. The client makes an API call and enters a "loading" state.
    -   `POST /api/generations`
    -   **Body:** `{ "prompt": "a video about making sourdough bread", "type": "THUMBNAIL" }`

2.  **Backend (Immediate Response):**
    -   The API endpoint validates the user's JWT and checks their generation credits.
    -   It creates a new record in the `generations` table with `status: 'PENDING'`.
    -   It immediately returns the `generation_id` to the client with a `202 Accepted` status.
    -   Simultaneously, it triggers a background serverless function, passing the `generation_id`.

3.  **Backend (Background Task):**
    -   The serverless function fetches the `generation` details.
    -   **Step A (Orchestration):** It constructs a detailed system prompt and calls the Gemini Pro API to generate 3-5 distinct thumbnail concepts (descriptions, text, mood) and 5 title strings.
    -   **Step B (Image Creation):** For each thumbnail concept, it calls the Image Generation API.
    -   **Step C (Storage):** It uploads the resulting images to Supabase Storage.
    -   **Step D (DB Update):** It creates new records in the `artifacts` table for each generated image URL and title.
    -   Finally, it updates the original `generations` record `status` to `'COMPLETED'`.

4.  **Client-Side (Polling):**
    -   Using React Query, the client polls a status endpoint every 5-10 seconds.
    -   `GET /api/generations/[generation_id]`
    -   Once the status is `'COMPLETED'`, the client fetches the results (artifacts) and displays them.

### Flow 2: Simple Edit

1.  **Client-Side:** User clicks an edit button on a generated thumbnail and changes the text.
    -   `POST /api/artifacts/[artifact_id]/edit`
    -   **Body:** `{ "action": "REPLACE_TEXT", "new_text": "Easy Sourdough!" }`
2.  **Backend:**
    -   This can be a synchronous, faster operation.
    -   A serverless function loads the base image, applies the text overlay change, and saves a new version to Supabase Storage.
    -   Returns the URL of the new artifact.

## 6. Authentication & Authorization

-   **Authentication:** Clerk will manage all user sign-up, sign-in, and session management. The frontend will be wrapped in Clerk's provider.
-   **Authorization:**
    -   All API requests from the client to the backend must include a short-lived JWT generated by Clerk.
    -   A backend middleware will verify the JWT on every protected endpoint.
    -   **Database Security:** Supabase Row Level Security (RLS) will be enabled on all tables. Policies will ensure users can only access their own data.
        -   *Example RLS Policy on `generations` table:* `(auth.uid() = user_id)`

## 7. Implementation of Key Non-Functional Requirements

-   **Response Time (< 3 min):** This applies to the end-to-end generation process. It is achieved via the asynchronous architecture described in Flow 1. The user receives an immediate UI response while the heavy lifting happens in the background.
-   **Availability (99.5%):** Achieved by relying on the high-availability infrastructure of Vercel and Supabase. No self-managed servers are required.
-   **Security:** Handled by Clerk's robust authentication and Supabase RLS policies at the database level.
-   **Data Privacy (Anonymization):** A scheduled cron job (e.g., Supabase `pg_cron`) will execute a SQL script weekly to find `generations` older than 30 days and anonymize associated user data as required by the PRD.