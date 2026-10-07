// JSON-LD 구조화 데이터 출력 — `</script>` 조기 종료를 막기 위해 `<`를 이스케이프한다.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
