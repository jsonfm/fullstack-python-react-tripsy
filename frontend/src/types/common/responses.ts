export interface BaseResponse<T> {
  data?: T;
  message?: string;
  error?: string;
  status_code?: number;
}
