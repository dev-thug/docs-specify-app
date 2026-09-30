import { SpecifyWordmark } from "@/components/brand/SpecifyLogo";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/i18n";
import { PRODUCT_URL, SUPPORT_EMAIL } from "@/lib/site";

// 사이트 하단 — 제품·정책 원천 페이지(specify.app)로 연결한다.
export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary["footer"] }) {
  const columns = [
    {
      title: dict.product,
      links: [
        { label: dict.home, href: `${PRODUCT_URL}/${locale}` },
        { label: dict.pricing, href: `${PRODUCT_URL}/${locale}/pricing` },
        { label: dict.blog, href: `${PRODUCT_URL}/${locale}/blog` },
      ],
    },
    {
      title: dict.legal,
      links: [
        { label: dict.privacy, href: `${PRODUCT_URL}/${locale}/privacy` },
        { label: dict.terms, href: `${PRODUCT_URL}/${locale}/terms` },
      ],
    },
    {
      title: dict.support,
      links: [{ label: dict.contact, href: `mailto:${SUPPORT_EMAIL}` }],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <SpecifyWordmark />
          <p className="text-xs text-muted-foreground">{dict.copyright}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-2.5">
              <p className="text-xs font-medium text-foreground">{column.title}</p>
              {column.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
