# Vision3 Design Guide

## 1. 전체적인 무드

Vision3는 AI 기반 유튜브 썸네일 및 제목 자동 생성 서비스로서, **혁신적이고 미래지향적인** 디자인 무드를 추구합니다. 복잡한 디자인 프로세스를 간단한 대화로 해결하는 서비스 특성에 맞춰, 사용자에게 **기술의 힘과 창의성**을 동시에 전달하는 시각적 경험을 제공합니다.

핵심 디자인 철학:
- **직관적 단순함**: 복잡한 AI 기술을 감추고 자연스러운 대화형 인터페이스 제공
- **창의적 에너지**: 크리에이터의 창작 욕구를 자극하는 역동적 시각 요소
- **신뢰할 수 있는 전문성**: 3분 내 전문가 수준 결과물을 보장하는 안정감
- **개성 있는 브랜딩**: 경쟁 서비스와 차별화되는 독특한 시각적 아이덴티티

## 2. 참조 서비스

- **Name**: Linear
- **Description**: 현대적이고 미니멀한 프로젝트 관리 도구
- **Design Mood**: 다크 테마 기반의 세련되고 전문적인 인터페이스, 네온 액센트 컬러로 포인트를 주는 미래지향적 디자인
- **Primary Color**: #0E1117
- **Secondary Color**: #B0FF2D

## 3. 색상 & 그라데이션

### 주요 색상 팔레트
- **Primary Color**: #0E1117 (Deep Dark Navy)
- **Secondary Color**: #B0FF2D (Electric Lime)
- **Background Colors**: 
  - Main: #0E1117
  - Card: #1A1D23
  - Elevated: #252932
- **Text Colors**:
  - Primary: #F5F7FA
  - Secondary: #9CA3AF
  - Muted: #6B7280
- **Accent Colors**:
  - Success: #10B981
  - Warning: #F59E0B
  - Error: #EF4444
  - Info: #3B82F6

### 무드 & 사용법
- **Mood**: Cool tone, High contrast, Futuristic
- **Color Usage**: 
  1. **Primary (#0E1117)**: 배경, 주요 컨테이너
  2. **Secondary (#B0FF2D)**: CTA 버튼, 활성 상태, 중요 액션
  3. **Text (#F5F7FA)**: 주요 텍스트, 제목
  4. **Cards (#1A1D23)**: 콘텐츠 카드, 입력 필드
  5. **Accents**: 상태 표시, 피드백, 보조 액션

## 4. 타이포그래피 & 폰트

### 폰트 시스템
- **Primary Font**: Inter (System fallback: -apple-system, BlinkMacSystemFont, "Segoe UI")
- **Display Font**: Satoshi (Headlines and branding)

### 타이포그래피 스케일
- **Heading 1**: Satoshi Bold, 48px, 1.1 line-height, -0.02em letter-spacing
- **Heading 2**: Satoshi Bold, 36px, 1.2 line-height, -0.015em letter-spacing
- **Heading 3**: Satoshi SemiBold, 24px, 1.3 line-height, -0.01em letter-spacing
- **Body Large**: Inter Medium, 18px, 1.5 line-height, 0em letter-spacing
- **Body**: Inter Regular, 16px, 1.5 line-height, 0em letter-spacing
- **Body Small**: Inter Regular, 14px, 1.4 line-height, 0.005em letter-spacing
- **Caption**: Inter Medium, 12px, 1.3 line-height, 0.01em letter-spacing

## 5. 레이아웃 & 구조

### 그리드 시스템
- **Container Max Width**: 1280px
- **Grid Columns**: 12 columns
- **Gutter**: 24px
- **Margins**: 
  - Desktop: 80px
  - Tablet: 40px
  - Mobile: 20px

### 레이아웃 원칙
- **Top Navigation**: 고정형 상단 네비게이션 바 (72px height)
- **Main Content**: 중앙 정렬, 최대 너비 제한
- **Chat Interface**: 전체 화면 활용, 좌우 여백 최소화
- **Cards**: 8px border-radius, subtle shadow
- **Spacing System**: 4px 기준 (4, 8, 12, 16, 24, 32, 48, 64, 80px)

## 6. 비주얼 스타일

### 아이콘
- **Style**: Lucide React 기반 outline 스타일
- **Size**: 16px, 20px, 24px, 32px
- **Weight**: 1.5px stroke-width
- **Color**: 컨텍스트에 따라 text colors 적용

### 이미지 & 일러스트레이션
- **Style**: 추상적 그라데이션 형태, 기하학적 패턴
- **Color Scheme**: Primary와 Secondary 색상 기반 그라데이션
- **Usage**: 로딩 상태, 빈 상태, 온보딩 일러스트레이션

### 로고
- **Style**: 미니멀한 워드마크, 각진 컷 디테일
- **Color**: Primary (#F5F7FA) 또는 Secondary (#B0FF2D)
- **Size**: 32px height (navigation), 48px height (landing)

## 7. UX 가이드

### 사용자 경험 전략
Vision3는 **전문가와 초보자가 혼재된** 크리에이터 사용자층을 대상으로 하므로 **듀얼 모드 UX**를 적용합니다.

### 핵심 UX 원칙
1. **Progressive Disclosure**: 복잡한 기능은 단계적으로 노출
2. **Conversational Flow**: 자연스러운 대화 흐름 유지
3. **Immediate Feedback**: 모든 액션에 즉각적인 피드백 제공
4. **Error Prevention**: 사용자 실수를 미연에 방지하는 가이드 제공

### 사용자별 경험 설계
- **초보자**: 온보딩 가이드, 예시 프롬프트, 자동 추천
- **숙련자**: 빠른 액세스, 고급 편집 옵션, 배치 작업
- **공통**: 직관적인 채팅 인터페이스, 실시간 미리보기

## 8. UI 컴포넌트 가이드

### 버튼
- **Primary Button**: 
  - Background: #B0FF2D
  - Text: #0E1117
  - Padding: 12px 24px
  - Border-radius: 8px
  - Font: Inter Medium 16px
  - Hover: 5% darker, subtle glow effect

- **Secondary Button**:
  - Background: transparent
  - Border: 1px solid #374151
  - Text: #F5F7FA
  - Padding: 12px 24px
  - Border-radius: 8px
  - Hover: border color to #B0FF2D

### 입력 필드
- **Background**: #1A1D23
- **Border**: 1px solid #374151
- **Border-radius**: 8px
- **Padding**: 12px 16px
- **Font**: Inter Regular 16px
- **Placeholder**: #6B7280
- **Focus**: border color to #B0FF2D, subtle glow

### 카드
- **Background**: #1A1D23
- **Border**: 1px solid #374151
- **Border-radius**: 12px
- **Padding**: 24px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Hover**: subtle scale (1.02), border color to #4B5563

### 네비게이션 바
- **Background**: #0E1117
- **Height**: 72px
- **Border-bottom**: 1px solid #1F2937
- **Backdrop-blur**: 10px
- **Position**: sticky top

### 채팅 인터페이스
- **Message Bubble (User)**: 
  - Background: #B0FF2D
  - Text: #0E1117
  - Border-radius: 18px 18px 4px 18px
  - Max-width: 80%

- **Message Bubble (AI)**:
  - Background: #1A1D23
  - Text: #F5F7FA
  - Border-radius: 18px 18px 18px 4px
  - Max-width: 80%

### 로딩 상태
- **Spinner**: #B0FF2D 색상의 rotating border
- **Skeleton**: #1A1D23 배경에 #252932 shimmer effect
- **Progress Bar**: #B0FF2D fill with animated gradient

### 마이크로 인터랙션
- **Hover Effects**: subtle scale (1.02-1.05), opacity changes
- **Click Effects**: brief scale down (0.98), then return
- **Loading**: pulsing glow effect on active elements
- **Transitions**: 200ms ease-out for most interactions

### 접근성 고려사항
- **Contrast Ratio**: WCAG AA 준수 (#B0FF2D vs #0E1117 = 4.5:1 이상)
- **Focus States**: 모든 interactive 요소에 명확한 focus indicator
- **Screen Reader**: semantic HTML과 적절한 ARIA labels
- **Keyboard Navigation**: Tab order와 keyboard shortcuts 지원