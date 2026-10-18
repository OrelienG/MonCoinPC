import { createContext } from 'react';

export type Metadata = {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
};
export const MetadataContext = createContext<Metadata | null>(null);
