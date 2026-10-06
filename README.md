# RelayDesk Demo

Specify의 RAG 활용사례를 재현하는 합성 자료와 코드입니다. 실제 Specify 또는 고객사의 보안 정책·서비스 기능이 아닙니다. 실제 개인정보·고객 자료·자격 증명은 없습니다.

## 자료

- `sources/relaydesk-security-current.md`: 현행 시연 정책.
- `sources/relaydesk-security-retired.md`: 폐기된 이전 답변. 현행 답변으로 쓰면 안 됩니다.
- `sources/relaydesk-project-brief.md`: 요구와 구현의 차이를 확인할 인수인계 자료.
- `sources/relaydesk-release-brief.md`: 1.4 변경 범위와 고객 안내 기준.
- `sources/relaydesk-faq-before.md`: 갱신할 이전 FAQ.

## 코드

1.4 시연 버전에서 `src/export-tasks.js`에 CSV 내보내기 라이브러리를 구현했습니다. Node.js 24 이상에서 `npm test`, `npm run demo`로 확인합니다. 외부 의존성이 없어 설치 과정은 필요하지 않습니다.

실제 구현 한도는 1,000건입니다. 기획 메모의 10,000건 요청과 구분하세요. ZIP 기능은 구현하지 않았습니다. 역할 매개변수를 검사하지만 실제 로그인·권한 발급, 웹 UI, 서버, 데이터베이스 및 고객 계정은 구현하지 않습니다.

`sources/`의 TLS·암호화·삭제 기간 등은 가상 정책 입력입니다. 코드의 구현 사실과 혼동하지 마세요. 인수인계 결과에서 코드로 확인할 수 없는 배포·보안·운영 절차는 미확인으로 남깁니다.
