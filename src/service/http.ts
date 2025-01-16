import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
} from "axios";

type HttpOptions = {
  query?: Record<string, any>;
  headers?: Record<string, string>;
};

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    headers: {
      accept: "application/json",
    },
  });
};

const instance: AxiosInstance = createAxiosInstance();

interface Http {
  get<T>(path: string, options?: HttpOptions): Promise<T>;
}

export const useHttp = (): Http => {
  const get = async <T>(path: string, options?: HttpOptions): Promise<T> => {
    try {
      const config: AxiosRequestConfig = {
        params: options?.query,
        headers: options?.headers,
      };

      const response: AxiosResponse<T> = await instance.get<T>(path, config);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "An error occurred");
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  };

  return {
    get,
  };
};
