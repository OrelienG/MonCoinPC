import { useEffect, useState } from 'react';

export type Review = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  googleMapsUri?: string;
  visitDate?: { month?: number; year?: number };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
};

export type ReviewsResponse = {
  rating?: number;
  reviewCount?: number;
  googleMapsUri?: string;
  reviews?: Review[];
};

export const useGoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/google-reviews.php', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Reviews unavailable');
        return response.json() as Promise<ReviewsResponse>;
      })
      .then(setReviewsData)
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return reviewsData;
};
