import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
};

const upsertMeta = (name: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
};

export const PageMeta = ({ title, description, canonical, noIndex = false }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (canonical) {
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }

      canonicalElement.href = canonical;
    } else {
      canonicalElement?.remove();
    }

    if (noIndex) {
      upsertMeta('robots', 'noindex');
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }
  }, [canonical, description, noIndex, title]);

  return null;
};
