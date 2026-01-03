# Vision3 정보 아키텍처 (IA)

## 1. 사이트맵 (사이트맵)

```
Vision3 (/)
├── 랜딩 페이지 (/)
├── 인증 (/auth)
│   ├── 로그인 (/auth/login)
│   ├── 회원가입 (/auth/signup)
│   └── 비밀번호 재설정 (/auth/reset-password)
├── 대시보드 (/dashboard) [인증 필요]
│   ├── 개요 (/dashboard)
│   ├── 최근 생성물 (/dashboard/recent)
│   └── 사용량 통계 (/dashboard/analytics)
├── 채팅 생성 (/generate) [인증 필요]
│   ├── 새 대화 (/generate)
│   └── 대화 기록 (/generate/:conversationId)
├── 라이브러리 (/library) [인증 필요]
│   ├── 내 썸네일 (/library/thumbnails)
│   ├── 내 제목 (/library/titles)
│   ├── 즐겨찾기 (/library/favorites)
│   └── 스타일 프리셋 (/library/presets)
├── 요금제 (/pricing)
│   ├── 플랜 비교 (/pricing)
│   └── 결제 완료 (/pricing/success)
├── 계정 관리 (/account) [인증 필요]
│   ├── 프로필 설정 (/account/profile)
│   ├── 구독 관리 (/account/subscription)
│   ├── 결제 내역 (/account/billing)
│   └── 계정 설정 (/account/settings)
├── 고객 지원 (/support)
│   ├── 도움말 센터 (/support/help)
│   ├── 문의하기 (/support/contact)
│   └── FAQ (/support/faq)
└── 오류 페이지
    ├── 404 페이지 (/404)
    └── 500 페이지 (/500)
```

## 2. 사용자 흐름 (사용자 흐름)

### **핵심 작업: 썸네일 생성 및 다운로드**
1. 사용자가 랜딩 페이지에서 "시작하기" 클릭
2. 회원가입/로그인 페이지로 이동
3. OAuth(Google) 인증 완료
4. 온보딩 모달에서 서비스 소개 확인
5. 대시보드로 리다이렉트
6. "새 썸네일 생성" 버튼 클릭하여 채팅 페이지 이동
7. 챗봇과 대화를 통해 영상 정보 입력
8. AI가 썸네일 생성
9. 원하는 썸네일 선택
10. PNG 다운로드 또는 클립보드 복사
11. 라이브러리에 자동 저장

### **핵심 작업: 구독 업그레이드**
1. 사용량 한계 도달 시 알림 표시
2. "업그레이드" 버튼 클릭
3. 요금제 페이지로 이동
4. 플랜 비교 및 선택
5. LemonSqueezy 결제 페이지로 이동
6. 결제 정보 입력 및 완료
7. 결제 성공 페이지 표시
8. 계정 관리 페이지로 리다이렉트

### **핵심 작업: 라이브러리 관리**
1. 사이드바에서 "라이브러리" 클릭
2. 탭을 통해 썸네일/제목/즐겨찾기 전환
3. 필터 및 검색으로 콘텐츠 탐색
4. 썸네일 호버 시 미리보기 표시
5. 우클릭 메뉴로 삭제/즐겨찾기/복사 액션
6. 스타일 프리셋 저장 및 재사용

## 3. 네비게이션 구조 (네비게이션 구조)

### **상단 네비게이션 바 (GNB)**
- **로고**: Vision3 워드마크 (홈으로 이동)
- **주요 메뉴**: 
  - 요금제 (/pricing)
  - 도움말 (/support/help)
- **사용자 영역**: 
  - 로그인 전: 로그인/회원가입 버튼
  - 로그인 후: 사용량 표시, 프로필 드롭다운

### **사이드바 네비게이션 (LNB)** [인증된 사용자만]
- **주요 섹션**:
  - 대시보드 (홈 아이콘)
  - 새 생성 (플러스 아이콘)
  - 라이브러리 (폴더 아이콘)
- **계정 섹션**:
  - 내 계정 (사용자 아이콘)
  - 설정 (톱니바퀴 아이콘)
  - 로그아웃

### **푸터 네비게이션**
- **회사 정보**: 서비스 소개, 팀 소개
- **지원**: FAQ, 문의하기, 커뮤니티
- **법적 고지**: 이용약관, 개인정보처리방침
- **소셜 링크**: Twitter, YouTube, Discord

## 4. 페이지 계층 구조 (페이지 계층 구조)

```
/ (Depth 1 - 공개)
/auth (Depth 1 - 공개)
  /auth/login (Depth 2 - 공개)
  /auth/signup (Depth 2 - 공개)
  /auth/reset-password (Depth 2 - 공개)
/pricing (Depth 1 - 공개)
  /pricing/success (Depth 2 - 인증 필요)
/support (Depth 1 - 공개)
  /support/help (Depth 2 - 공개)
  /support/contact (Depth 2 - 공개)
  /support/faq (Depth 2 - 공개)
/dashboard (Depth 1 - 인증 필요)
  /dashboard/recent (Depth 2 - 인증 필요)
  /dashboard/analytics (Depth 2 - 인증 필요)
/generate (Depth 1 - 인증 필요)
  /generate/:conversationId (Depth 2 - 인증 필요)
/library (Depth 1 - 인증 필요)
  /library/thumbnails (Depth 2 - 인증 필요)
  /library/titles (Depth 2 - 인증 필요)
  /library/favorites (Depth 2 - 인증 필요)
  /library/presets (Depth 2 - 인증 필요)
/account (Depth 1 - 인증 필요)
  /account/profile (Depth 2 - 인증 필요)
  /account/subscription (Depth 2 - 인증 필요)
  /account/billing (Depth 2 - 인증 필요)
  /account/settings (Depth 2 - 인증 필요)
```

## 5. 콘텐츠 구성 (콘텐츠 구성)

| 페이지 | 주요 콘텐츠 요소 |
|--------|------------------|
| 랜딩 페이지 | 히어로 섹션, 기능 소개, 데모 영상, 요금제 미리보기, CTA 버튼, 고객 후기 |
| 대시보드 | 사용량 위젯, 최근 생성물 그리드, 퀵 액션 버튼, 성과 차트, 알림 배너 |
| 채팅 생성 | 대화 인터페이스, 입력 필드, 생성 결과 갤러리, 편집 툴바, 다운로드 옵션 |
| 라이브러리 | 필터 탭, 검색바, 그리드 뷰/리스트 뷰, 썸네일 카드, 페이지네이션 |
| 요금제 | 플랜 비교 테이블, 기능 체크리스트, FAQ 섹션, 결제 버튼 |
| 계정 관리 | 프로필 폼, 구독 상태, 결제 내역 테이블, 설정 스위치 |
| 로그인/회원가입 | OAuth 버튼, 이메일 폼, 약관 동의, 리다이렉트 링크 |

## 6. 인터랙션 패턴 (인터랙션 패턴)

### **모달 사용**
- **온보딩 모달**: 첫 방문 시 서비스 소개 및 가이드
- **편집 모달**: 썸네일 세부 편집 (텍스트, 컬러 변경)
- **확인 모달**: 삭제, 로그아웃 등 중요 액션 확인
- **업그레이드 모달**: 사용량 한계 도달 시 구독 유도

### **툴팁 사용**
- **기능 설명**: 복잡한 UI 요소에 도움말 제공
- **단축키 안내**: 키보드 네비게이션 가이드
- **상태 정보**: 생성 진행률, 사용량 현황

### **드롭다운 메뉴**
- **사용자 프로필**: 계정 관리, 설정, 로그아웃
- **정렬 옵션**: 라이브러리 콘텐츠 정렬 방식
- **액션 메뉴**: 우클릭 컨텍스트 메뉴

### **인피니트 스크롤**
- **라이브러리 그리드**: 썸네일/제목 목록 로딩
- **대화 기록**: 채팅 히스토리 탐색

### **드래그 앤 드롭**
- **파일 업로드**: 영상 파일 또는 참조 이미지 업로드
- **라이브러리 정렬**: 즐겨찾기 순서 변경

## 7. URL 구조 (URL 구조)

### **URL 네이밍 규칙**
- **일반 리소스**: `/resource-name`
- **상세 페이지**: `/resource-name/:id`
- **중첩 리소스**: `/parent/child`
- **액션 기반**: `/resource-name/action`

### **구체적 URL 패턴**
```
/ - 랜딩 페이지
/auth/login - 로그인
/auth/signup - 회원가입
/dashboard - 대시보드 홈
/generate - 새 대화 시작
/generate/conv_abc123 - 특정 대화
/library/thumbnails - 썸네일 라이브러리
/library/favorites - 즐겨찾기
/account/profile - 프로필 설정
/account/subscription - 구독 관리
/pricing - 요금제
/support/faq - FAQ
```

### **SEO 최적화**
- **의미 있는 URL**: 사용자가 이해하기 쉬운 경로명
- **하이픈 사용**: 단어 구분자로 하이픈(-) 사용
- **소문자 통일**: 모든 URL을 소문자로 통일
- **슬래시 정규화**: 끝나는 슬래시 통일성 유지

## 8. 컴포넌트 계층 구조 (컴포넌트 계층 구조)

### **글로벌 컴포넌트**
- **AppLayout**: 전체 레이아웃 래퍼
- **TopNavigation**: 상단 네비게이션 바
- **Sidebar**: 사이드바 네비게이션
- **Footer**: 푸터 섹션
- **AuthGuard**: 인증 상태 확인 래퍼
- **LoadingSpinner**: 전역 로딩 인디케이터
- **Toast**: 알림 메시지 시스템

### **페이지별 주요 컴포넌트**

#### **랜딩 페이지**
- **HeroSection**: 메인 히어로 영역
- **FeatureGrid**: 기능 소개 그리드
- **DemoVideo**: 데모 영상 플레이어
- **PricingPreview**: 요금제 미리보기
- **TestimonialCarousel**: 고객 후기 슬라이더

#### **대시보드**
- **StatsWidget**: 사용량 통계 위젯
- **RecentGrid**: 최근 생성물 그리드
- **QuickActions**: 빠른 액션 버튼들
- **UsageChart**: 사용량 차트
- **NotificationBanner**: 알림 배너

#### **채팅 생성**
- **ChatInterface**: 대화 인터페이스
- **MessageBubble**: 메시지 버블
- **InputField**: 메시지 입력 필드
- **GenerationResults**: 생성 결과 갤러리
- **ThumbnailCard**: 썸네일 카드
- **EditModal**: 편집 모달
- **DownloadOptions**: 다운로드 옵션

#### **라이브러리**
- **FilterTabs**: 필터 탭 네비게이션
- **SearchBar**: 검색 입력 필드
- **ViewToggle**: 그리드/리스트 뷰 토글
- **ContentGrid**: 콘텐츠 그리드
- **ThumbnailPreview**: 썸네일 미리보기
- **ContextMenu**: 우클릭 메뉴
- **Pagination**: 페이지네이션

#### **계정 관리**
- **ProfileForm**: 프로필 편집 폼
- **SubscriptionCard**: 구독 상태 카드
- **BillingHistory**: 결제 내역 테이블
- **SettingsPanel**: 설정 패널
- **PlanUpgrade**: 플랜 업그레이드 섹션

### **공통 UI 컴포넌트**
- **Button**: 다양한 스타일의 버튼
- **Input**: 입력 필드
- **Modal**: 모달 다이얼로그
- **Tooltip**: 툴팁
- **Dropdown**: 드롭다운 메뉴
- **Card**: 콘텐츠 카드
- **Badge**: 상태 배지
- **Avatar**: 사용자 아바타
- **Progress**: 진행률 표시
- **Skeleton**: 로딩 스켈레톤

### **상태 관리 구조**
- **AuthStore**: 사용자 인증 상태
- **GenerationStore**: 생성 과정 및 결과
- **LibraryStore**: 라이브러리 콘텐츠
- **SubscriptionStore**: 구독 및 사용량 정보
- **UIStore**: 전역 UI 상태 (모달, 토스트 등)

이 정보 아키텍처는 Vision3의 사용자 중심적 설계를 반영하여, 크리에이터들이 직관적이고 효율적으로 서비스를 이용할 수 있도록 구성되었습니다. 대화형 AI 인터페이스를 중심으로 한 독특한 사용자 경험과 체계적인 콘텐츠 관리 시스템을 제공합니다.