import { StatusCodes } from 'http-status-codes';

export const API_URL = import.meta.env.VITE_API_URL as string;
export const AUTH_TOKEN_KEY_NAME = import.meta.env.VITE_AUTH_TOKEN_KEY_NAME as string;
export const REQUEST_TIMEOUT = 5000;

export const StatusCodeMessage: Record<number, string> = {
  [StatusCodes.UNAUTHORIZED]: 'We are sorry but we are not able to authenticate you. You don\'t have access to all the features of the app',
};

export enum APIStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}
