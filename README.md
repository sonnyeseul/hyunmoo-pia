# 현무 PIA 랜딩페이지

Figma 디자인(`현무 피아이에이` 파일, node `1:3` — "메인 랜딩페이지 (데스크톱)")을 기반으로 구현한 React + Tailwind CSS 랜딩페이지입니다.

## 실행 방법

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run build     # 프로덕션 빌드 (dist/ 폴더 생성)
npm run preview   # 빌드 결과 미리보기
```

## 기술 스택

- React 19 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, `src/index.css`에서 `@theme`으로 색상/폰트 토큰 정의)
- Pretendard 폰트 (CDN 링크, `index.html`)

## 폴더 구조

```
src/
  assets/figmaAssets.js   # 모든 이미지/아이콘 URL을 한 곳에 모아둠
  components/             # 섹션별 컴포넌트 (Header, Hero, TrustBar, ...)
  App.jsx                 # 전체 페이지 조립
```

## ⚠️ 반드시 확인해주세요 — 이미지 에셋

`src/assets/figmaAssets.js`에 있는 이미지 URL은 전부 **Figma의 임시 CDN 링크**입니다
(`https://www.figma.com/api/mcp/asset/...`). Figma는 이 링크를 내보낸 시점(2026-08-16)
기준 **약 7일 동안만** 유지합니다.

이 세션(클라우드 샌드박스)은 보안 정책상 figma.com으로 직접 네트워크 요청을 보낼 수 없어서,
이미지를 다운로드해 프로젝트에 내장하는 작업을 대신 완료하지 못했습니다. 실제 서비스에
배포하기 전에 아래 작업이 필요합니다.

1. `src/assets/figmaAssets.js`에 나열된 각 URL을 브라우저로 열어 다운로드
2. `src/assets/images/` 폴더를 만들어 저장 (파일명은 자유롭게)
3. `figmaAssets.js`의 각 export를 `import xxx from "./images/xxx.png"` 형태로 교체

7일이 지나기 전에 이 작업을 해주시면, 위 배포 전 화면과 완전히 동일한 결과물을 계속
유지할 수 있습니다.

## 네비게이션 앵커 매핑

Figma 헤더의 6개 메뉴를 아래 섹션에 연결했습니다 (디자인에 명시적 페이지가 없어 가장
가까운 섹션으로 매핑함):

| 메뉴 | 연결된 섹션 |
| --- | --- |
| 서비스 분야 | 주요 서비스 분야 (Key Services) |
| 현무 PIA 소개 | 대표 인사말 (Director Message) |
| 자격 및 인증 | 자격 및 인증 (Qualifications) |
| 업무 절차 | 운영 원칙 (Operating Principles) |
| 비밀보장 | 철저한 보안 운영 방식 (Confidentiality) |
| FAQ | 자주 묻는 질문 |

## 그 외 참고 사항

- 문의 폼(`ContactForm.jsx`)은 실제 서버로 데이터를 전송하지 않는 프론트엔드 전용
  데모입니다. 실제 접수를 받으려면 이메일 전송 API나 백엔드 엔드포인트를 연결해야 합니다.
- 하단 푸터(회사명 · 주소 · 저작권 표시)는 Figma 디자인에 없던 요소를 최소한으로 추가한
  것입니다 — 완성된 페이지 느낌을 위해 넣었습니다. 불필요하면 `App.jsx`에서 `<Footer />`를
  제거하면 됩니다.
- 자격 및 인증 섹션의 인증서 카드/파트너 로고 캐러셀은 원본의 절대 좌표 애니메이션을
  그대로 재현하지 않고, 가로 스크롤 목록으로 단순화했습니다.
