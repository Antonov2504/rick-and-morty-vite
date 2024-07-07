import { useFetch, useIntersection } from '@mantine/hooks';
import { GetDataResponse } from '@src/types';
import { useEffect, useState } from 'react';

type UseInfinityScrollProps = {
  url: string;
  root: HTMLDivElement | null;
  threshold: number;
};

export const useInfinityScroll = <T>({ url, root, threshold }: UseInfinityScrollProps) => {
  const [cards, setCards] = useState<T[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error } = useFetch<GetDataResponse<T>>(`${url}?page=${pageNumber}`);

  const { ref, entry } = useIntersection({
    root,
    threshold,
  });

  useEffect(() => {
    if (!loading && data?.results?.length) {
      setCards([...cards, ...data.results]);
    }
  }, [data?.results, loading]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPageNumber((p) => p + 1);
    }
  }, [entry?.isIntersecting]);

  return {
    cards,
    isLoading: loading,
    error,
    ref,
  };
};
