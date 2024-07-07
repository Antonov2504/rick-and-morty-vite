export type SortTypes = 'asc' | 'desc' | undefined;

export type UserData = {
  username: string;
  password: string;
};

export type GetDataResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: T[];
};

export type QueryParams = {
  page?: number;
};
