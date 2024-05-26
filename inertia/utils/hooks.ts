import { useEffect, useState } from 'react';
import axiosInstance from './axios_instance';
import { AxiosError, AxiosResponse } from 'axios';

export function useFetch<T>(url: string, deps?: Array<any>) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((response: AxiosResponse<T>) => setData(response.data))
      .catch((error) => console.error(error.message));
  }, deps);

  return data;
}

export function usePost<T>(url: string, value: T, deps?: Array<any>) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axiosInstance
      .post(url, value)
      .then((response: AxiosResponse) => setData(response.data))
      .catch((error) => console.error(error.message));
  }, deps);

  return data;
}

export function usePut<T>(
  url: string,
  value: { title?: string; content?: string },
  deps?: Array<any>
) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axiosInstance
      .put(url, value)
      .then((response: AxiosResponse) => setData(response.data))
      .catch((error) => console.error(error.message));
  }, deps);

  return data;
}

export function useDelete(url: string, deps?: Array<any>) {
  const [status, setStatus] = useState<number | undefined>();

  useEffect(() => {
    axiosInstance
      .delete(url)
      .then((response: AxiosResponse) => setStatus(response.status))
      .catch((error: AxiosError) => setStatus(error.status));
  }, deps);

  return status;
}
