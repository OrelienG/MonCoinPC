import { useContext, useEffect } from 'react';
import { MetadataContext } from '../lib/metadata';

type PageMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
};

const upsertMeta = (name: string, content: string, attribute = 'name') => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
};

export const PageMeta = ({ title, description, canonical, noIndex = false }: PageMetaProps) => {
  const metadata = useContext(MetadataContext);
  if (metadata) Object.assign(metadata, { title, description, canonical, noIndex });

  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    if (canonical) upsertMeta('og:url', canonical, 'property');
    else document.head.querySelector('meta[property="og:url"]')?.remove();

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
