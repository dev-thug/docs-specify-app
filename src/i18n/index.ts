import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ja } from "./ja";
import { ko, type Dictionary } from "./ko";

const DICTIONARIES: Record<Locale, Dictionary> = { ko, en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
