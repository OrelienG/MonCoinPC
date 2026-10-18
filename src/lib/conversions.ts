export type ConversionEvent =
  | 'phone_click'
  | 'email_click'
  | 'quote_click'
  | 'service_quote_click'
  | 'form_success'
  | 'google_reviews_click';

export const trackConversion = (event: ConversionEvent) => {
  if (import.meta.env.DEV) {
    return;
  }

  const body = JSON.stringify({ event });

  try {
    if (navigator.sendBeacon?.('/api/conversions.php', new Blob([body], { type: 'text/plain' }))) {
      return;
    }
  } catch {
    // A failed counter must not interrupt the contact action.
  }

  void fetch('/api/conversions.php', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'text/plain' },
    keepalive: true,
    credentials: 'same-origin',
  }).catch(() => undefined);
};
