import type { CacheConfig } from "../types/cache-config";
import type { IApiClient } from "../../../../../../packages/core/";
import { addUrlParams } from "../utils";
import { ApiResponse } from "../../../../../../packages/core/responses/api-response";
import { handleApiError } from "../utils/handle-api-error";
export const NextApiClient = (cacheConfig?: CacheConfig): IApiClient => {
  let baseUrl: string;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  let params: Record<string, string> = {};

  return {
    async get<ResponseBody>(url: string, body: unknown) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "GET",
        headers,
        body: JSON.stringify(body),
        cache: cacheConfig?.isCacheEnabled ? "force-cache" : "no-store",
      });
      params = {};
      const data = await response.json();

      if (response.status >= 400) {
        return handleApiError<ResponseBody>(data, response.status);
      }

      return new ApiResponse<ResponseBody>({
        body: data,
        statusCode: response.status,
      });
    },

    async post<ResponseBody>(url: string, body: unknown) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "POST",
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
      params = {};
      if (response.ok){
        return new ApiResponse<ResponseBody>({
          body: undefined,
          statusCode: response.status,
        });
      }

      const data = await response.json().catch(() => null);
      return handleApiError(data, response.status);
    },

    async put<ResponseBody>(url: string, body: unknown) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(body) ?? {},
      });
      params = {};
      const data = await response.json();

      if (!response.ok) {
        return handleApiError<ResponseBody>(data, response.status);
      }

      return new ApiResponse<ResponseBody>({
        body: data,
        statusCode: response.status,
      });
    },

    async delete(url: string, body: unknown): Promise<ApiResponse<void>> {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "DELETE",
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
      params = {};
      if (response.ok) {
        return new ApiResponse<void>({
          body: undefined,
          statusCode: response.status,
        });
      }

      const data = await response.json().catch(() => null);
      return handleApiError(data, response.status);
    },

    async multipart<ResponseBody>(url: string, body: FormData) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "POST",
        body: body,
      });
      params = {};
      const data = await response.json();

      if (!response.ok) {
        return handleApiError<ResponseBody>(data, response.status);
      }

      return new ApiResponse<ResponseBody>({
        body: data,
        statusCode: response.status,
      });
    },

    setBaseUrl(url: string) {
      baseUrl = url;
    },

    setHeader(key: string, value: string) {
      headers[key] = value;
    },

    setParam(key: string, value: string) {
      params[key] = value;
    },
  };
};
