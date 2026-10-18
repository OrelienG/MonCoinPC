import { useEffect } from 'react';
import { ConversionEvent, trackConversion } from '../lib/conversions';

const allowedEvents = new Set<ConversionEvent>([
  'phone_click',
  'email_click',
  'quote_click',
  'service_quote_click',
  'google_reviews_click',
]);

export const ConversionTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trackedElement = target.closest<HTMLElement>('[data-conversion]');
      const conversion = trackedElement?.dataset.conversion as ConversionEvent | undefined;

      if (conversion && allowedEvents.has(conversion)) {
        trackConversion(conversion);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};
