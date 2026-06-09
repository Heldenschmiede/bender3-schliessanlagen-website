import type { PagePrefetchFn } from "@floot/prefetch";

export const prefetch: PagePrefetchFn = async () => {
  // Static page, cache for 1 hour
  return { maxAge: 3600 };
};