import { useCallback, useEffect, useRef, useState } from 'react';
import { GetDataResponse } from '@src/types';
import { useFetch } from './useFetch';
import { useSort } from './useSort';

type UseInfinityScrollProps = {
  url: string;
};

export const useInfinityScrollWithSort = <T extends { created: string }>({
  url,
}: UseInfinityScrollProps) => {
  const [cards, setCards] = useState<T[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef<IntersectionObserver>();

  const { onSort, currentSort, sortedData } = useSort({
    data: cards.map((c) => ({ ...c, created: new Date(c.created).valueOf() })),
    key: 'created',
  });

  const { data, isLoading, error } = useFetch<GetDataResponse<T>>({
    url,
    params: {
      page: pageNumber,
    },
  });

  const refLastNode = useCallback(
    (node: Element | null) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (sortedData.length && entries[0].isIntersecting && !!data?.info?.next) {
          setPageNumber((prevState) => prevState + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, sortedData.length, data?.info?.next]
  );

  useEffect(() => {
    if (!isLoading && data?.results?.length) {
      setCards((prevState) => [...prevState, ...data.results]);
    }
  }, [data?.results, isLoading]);

  return {
    isLoading,
    error,
    cards: sortedData,
    currentSort,
    refLastNode,
    onSort,
  };
};
