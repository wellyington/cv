import { useCallback, useEffect, useState } from 'react';
import { LANGS, translations, type Lang } from '@/i18n/translations';

const STORAGE_KEY = 'wa-portfolio-lang';
const VALID_LANGS = new Set<string>(LANGS);

function detectInitialLang(): Lang {
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get('lang');
  if (paramLang && VALID_LANGS.has(paramLang)) {
    return paramLang as Lang;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_LANGS.has(stored)) {
    return stored as Lang;
  }

  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === 'es') return 'es';
  if (browser === 'pt') return 'pt';
  return 'en';
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);

    const url = new URL(window.location.href);
    if (next === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', next);
    }
    window.history.replaceState({}, '', url);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const t = translations[lang];

    document.title = t.meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', t.meta.description);
    setMeta('meta[property="og:title"]', 'content', t.meta.ogTitle);
    setMeta('meta[property="og:description"]', 'content', t.meta.ogDescription);
    setMeta('meta[name="twitter:title"]', 'content', t.meta.ogTitle);
    setMeta('meta[name="twitter:description"]', 'content', t.meta.twitterDescription);

    const updateHreflang = (hreflang: string, href: string) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const base = window.location.origin + window.location.pathname;
    updateHreflang('en', base);
    updateHreflang('es', `${base}?lang=es`);
    updateHreflang('pt', `${base}?lang=pt`);
    updateHreflang('x-default', base);
  }, [lang]);

  return { lang, setLang, t: translations[lang] };
}
