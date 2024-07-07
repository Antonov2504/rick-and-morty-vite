import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { QueryParams } from '@src/types';

type UseFetchParams = {
  url: string;
  params?: QueryParams;
};

export const useFetch = <T>({ url, params = {} }: UseFetchParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    setError(null);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios({
      method: 'GET',
      url,
      params,
      cancelToken: source.token,
    })
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((e) => {
        console.log(e);
        setData(null);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, params.page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
};
