import en from '../data/config.json';
import it from '../data/config.it.json';

function get(obj: Record<string, unknown>, path: string): string {
  const val = path.split('.').reduce<unknown>((o, k) => {
    if (o !== null && typeof o === 'object') return (o as Record<string, unknown>)[k];
    return undefined;
  }, obj);
  return typeof val === 'string' ? val : `[${path}]`;
}

/**
 * Returns a t() function for the given locale.
 * Falls back to EN (config.json) if a key is missing in the locale dict.
 */
export function useTranslations(lang: string) {
  const dict = lang === 'it' ? it as unknown as Record<string, unknown> : en as unknown as Record<string, unknown>;
  const fallback = en as unknown as Record<string, unknown>;
  return (key: string): string => {
    const val = get(dict, key);
    if (val === `[${key}]`) return get(fallback, key);
    return val;
  };
}

// Direct access to full translation objects (useful for iterating arrays).
export { en, it };
