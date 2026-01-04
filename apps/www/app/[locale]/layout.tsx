import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ClientProviders } from "../client-providers";
import { Toaster } from "@myapp/ui/components/sonner";
import "@myapp/ui/globals.css";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="light">
      <body
        className="antialiased"
        style={{
          backgroundColor: "#fafaf9",
          color: "#0c0a09",
        }}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ClientProviders>
            {children}
            <Toaster />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
