export interface HttpBaseResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export interface HttpData<T> {
  data: T;
  total: number;
}
