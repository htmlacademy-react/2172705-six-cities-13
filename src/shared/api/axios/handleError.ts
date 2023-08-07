import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type ErrorMessage = {
  type: string;
  message: string;
}

export const handleError = (error: AxiosError<ErrorMessage>) => {
  if (error.response) {
    toast.error(error.response.data.message);
  }

  throw error;
};
