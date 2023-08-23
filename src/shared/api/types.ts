import { AxiosInstance } from 'axios';

export type AxiosThunkAPI = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
