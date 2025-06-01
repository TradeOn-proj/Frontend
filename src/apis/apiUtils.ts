import axiosInstance from "./axiosInstance";
import tokenInstance from "./tokenInstance";

export const apiGet = async <T, P>(url: string, params?: P): Promise<T> => {
  const response = await axiosInstance.get<T>(url, { params });
  return response.data;
};

export const apiPost = async <T, D>(url: string, data?: D): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data);
  return response.data;
};

export const authApiGet = async <T, P>(url: string, params?: P): Promise<T> => {
  const response = await tokenInstance.get<T>(url, { params });
  return response.data;
};

export const authApiPost = async <T, D, P>(
  url: string,
  data?: D,
  params?: P
): Promise<T> => {
  const response = await tokenInstance.post<T>(url, data, {
    params,
  });
  return response.data;
};

export const authApiDelete = async <T, P>(
  url: string,
  params?: P
): Promise<T> => {
  const response = await tokenInstance.delete<T>(url, {
    params,
  });
  return response.data;
};

export const authApiPatch = async <T, D, P>(
  url: string,
  data?: D,
  params?: P
): Promise<T> => {
  const response = await tokenInstance.patch<T>(url, data, {
    params,
  });
  return response.data;
};

export const authApiPut = async <T, D, P>(
  url: string,
  data?: D,
  params?: P
): Promise<T> => {
  const response = await tokenInstance.put<T>(url, data, {
    params,
  });
  return response.data;
};
