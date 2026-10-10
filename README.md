# 현무 민간조사 탐정사무소

React 19, Vite 8, Tailwind CSS 4로 구성한 홈페이지입니다. 사진과 자격증은 로컬 자산을 사용합니다. 온라인 상담은 카카오톡 상담창으로 연결합니다.

## 실행과 검증

Node.js 24와 npm 11에서 검증했습니다.

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

개발 서버는 기본 5173, 빌드 미리보기는 4173입니다. 배포 정적 파일은 dist/에 생성됩니다.

## 카카오톡 상담 연결

홈페이지의 상담 영역에서 **카카오톡 상담하기**를 누르면 기존 카카오톡 상담 링크가 새 창으로 열립니다. 이용자가 카카오톡에서 문의 내용을 직접 작성하고 전송합니다.

현재 홈페이지에는 이름·연락처·상담 내용을 입력하는 접수 폼이 없습니다. 사이트에서 상담 정보를 수집하거나 이메일로 자동 발송하지 않습니다. 카카오톡 연결에는 이메일 인증정보, 앱 비밀번호 또는 Turnstile 설정이 필요하지 않습니다.

공개 상담 채널은 다음과 같습니다.

- 대표 전화: 1551-5152
- 공개 이메일: actoz2001@gmail.com
- 카카오톡: https://open.kakao.com/o/saLK9lJi
- 텔레그램: https://t.me/newdiacom

카카오톡의 대화 전달·보관에는 [카카오 개인정보처리방침](https://www.kakao.com/policy/privacy)이 적용됩니다. 사무소의 상담 정보 취급과 자료 반환·폐기 안내는 개인정보 페이지에서 확인할 수 있습니다. 별도의 영구 상담 데이터베이스를 운영하지 않습니다.

## 주요 파일

- src/components/ContactForm.jsx: 카카오톡 상담 연결 카드와 전화·개인정보 안내
- src/config/contact.js: 공개 상담 채널
- src/components/TrustBar.jsx: 실적 98% / 875 / 1,672 / 1,672
- src/components/OdometerNumber.jsx: 화면 진입 시 한 번 실행되는 숫자 효과
- src/pages/ServiceDetail.jsx: 분야별 상세
- src/pages/PrivacyPolicy.jsx: 상담 정보 처리·업무 범위·자료 보관 안내
- src/assets/: 로컬 이미지와 웹 표시용 최적화 파일

## 페이지 이동

| Hash 경로 | 내용 |
| --- | --- |
| #service-detail?category=family | 개인·가정 조사 |
| #service-detail?category=corporate | 기업 조사 |
| #service-detail?category=locate | 소재 파악·신변보호 |
| #service-detail?category=security | 도청·불법촬영 탐지 |
| #contact | 카카오톡 상담 연결 영역 |
| #privacy-policy | 개인정보 및 운영 안내 |
| #privacy-policy?section=privacy | 개인정보 처리방침 |
| #privacy-policy?section=scope | 업무 범위 |
| #privacy-policy?section=storage | 자료 보관·폐기 |

정적 호스팅에서도 hash 경로를 새로고침할 수 있습니다. 전화·공개 이메일·텔레그램으로도 이용자가 직접 문의할 수 있습니다.

## 이미지·팝업·동작 설정

웹에 표시하는 자격증은 개인정보를 이미지 픽셀에 가린 파일입니다. 가림막을 보완한 3장의 기존 원본은 .private-assets/에 보존하며 Git·배포 업로드에서 제외합니다. 이 폴더와 .env.local은 공유하지 않습니다.

public/의 모든 파일은 참조 여부와 무관하게 배포에 포함됩니다. 이 폴더에는 공개 가능한 로고·파비콘·공유 이미지와 검색 안내 파일만 둡니다.

팝업 일반 닫기는 브라우저 탭 세션 동안, ‘오늘은 그만 보기’는 해당 브라우저 날짜의 당일 동안 재표시하지 않습니다. 팝업 표시 여부만 저장하며 상담 정보는 브라우저 저장소에 저장하지 않습니다.

동작 줄이기 설정에서는 숫자·슬라이드·등장 효과·부드러운 스크롤을 줄입니다. 팝업과 인증 이미지 확대 창은 키보드로 닫을 수 있습니다.

## 배포 주소

프로젝트의 기준 주소는 https://hyunmoo-pia.vercel.app/입니다. 다른 도메인으로 바꾸면 index.html의 canonical·OG URL·공유 이미지 주소, public/robots.txt, public/sitemap.xml을 함께 갱신합니다. public/og-image.jpg는 사용자 제공 돋보기 사진입니다.
