import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "22pph8opgb",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});