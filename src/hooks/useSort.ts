import { SortTypes } from '@src/types';
import { getSorted } from '@src/utils';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type UseSortParams<T> = {
  data: T[];
  key: keyof T;
};

export const useSort = <T>({ data, key }: UseSortParams<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearchParams = Object.fromEntries(searchParams);
  const initialSort = searchParams.get('sort') as SortTypes;

  const [currentSort, setCurrentSort] = useState<SortTypes>(initialSort);
  const [sortedData, setSortedData] = useState<T[]>(data);

  const handleSort = () => {
    if (currentSort === 'desc') {
      delete initialSearchParams.sort;

      setCurrentSort(undefined);
      setSortedData(data);
      setSearchParams(initialSearchParams);

      return;
    }

    const newSort = currentSort === 'asc' ? 'desc' : 'asc';
    const sorted = getSorted({ array: data, key, sort: newSort });

    setCurrentSort(newSort);
    setSortedData(sorted);
    setSearchParams({ ...initialSearchParams, sort: newSort });
  };

  useEffect(() => {
    const sorted = getSorted({ array: data, key, sort: currentSort });
    setSortedData(sorted);
  }, [currentSort, data, data.length, key]);

  return {
    currentSort,
    sortedData,
    onSort: handleSort,
  };
};
