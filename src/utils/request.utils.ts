import type { AxiosRequestConfig } from "axios";
import api from "../services/api.client";

export const request = async <T>(
  config: AxiosRequestConfig,
  opts?: {
    signal?: AbortSignal;
  },
): Promise<T> => {
  if (opts?.signal) {
    config.signal = opts.signal;
  }

  const res = await api(config);
  return res.data;
};
