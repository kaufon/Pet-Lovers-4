import { NextApiClient } from "./next-api-client";
import type { CacheConfig } from "../types/cache-config";

export const NextServerApiClient = (cacheConfig?: CacheConfig) => {
  const apiClient = NextApiClient(cacheConfig);
  apiClient.setBaseUrl("https://localhost:32851");
  return apiClient;
};
