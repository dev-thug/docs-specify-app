# RelayDesk Demo

Specify의 RAG 활용사례를 재현하는 합성 자료와 코드입니다. 실제 Specify 또는 고객사의 보안 정책·서비스 기능이 아닙니다. 실제 개인정보·고객 자료·자격 증명은 없습니다.

## 자료

- `sources/relaydesk-security-current.md`: 현행 시연 정책.
- `sources/relaydesk-security-retired.md`: 폐기된 이전 답변. 현행 답변으로 쓰면 안 됩니다.
- `sources/relaydesk-project-brief.md`: 요구와 구현의 차이를 확인할 인수인계 자료.
- `sources/relaydesk-release-brief.md`: 1.4 변경 범위와 고객 안내 기준.
- `sources/relaydesk-faq-before.md`: 갱신할 이전 FAQ.

## 코드

1.3 기준 시연 자료입니다. 다음 변경에서 CSV 내보내기 라이브러리를 추가합니다. 실제 웹 UI, 서버, 데이터베이스 또는 고객 계정은 구현하지 않습니다.
