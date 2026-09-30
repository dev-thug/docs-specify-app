import type { Locale } from "@/lib/i18n";
import type { NavLabels } from "@/lib/navigation";
import { enNav } from "./en";
import { jaNav } from "./ja";
import { koNav } from "./ko";

export const NAV_LABELS: Record<Locale, NavLabels> = { ko: koNav, en: enNav, ja: jaNav };
