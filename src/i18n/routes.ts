export type Lang = 'en' | 'sv';
export type PageKey = 'home' | 'services' | 'how' | 'pricing' | 'about' | 'contact' | 'privacy' | 'notFound';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { en: '/', sv: '/sv/' },
  services: { en: '/services/', sv: '/sv/tjanster/' },
  how: { en: '/how-it-works/', sv: '/sv/sa-gar-det-till/' },
  pricing: { en: '/pricing/', sv: '/sv/priser/' },
  about: { en: '/about/', sv: '/sv/om-apostella/' },
  contact: { en: '/contact/', sv: '/sv/kontakt/' },
  privacy: { en: '/privacy/', sv: '/sv/integritetspolicy/' },
  notFound: { en: '/404/', sv: '/404/' },
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'sv' : 'en');
export const htmlLang: Record<Lang, string> = { en: 'en-GB', sv: 'sv-SE' };
export const ogLocale: Record<Lang, string> = { en: 'en_GB', sv: 'sv_SE' };
