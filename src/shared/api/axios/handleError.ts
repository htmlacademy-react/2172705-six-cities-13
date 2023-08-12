import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodeMessage } from '../const';

type ErrorMessage = {
  type: string;
  message: string;
}

export const handleError = (error: AxiosError<ErrorMessage>) => {
  if (error.response) {
    if (StatusCodeMessage[error.response.status]) {
      toast.error(StatusCodeMessage[error.response.status]);
    } else {
      toast.error(error.response.data.message);
    }
  }

  throw error;
};
