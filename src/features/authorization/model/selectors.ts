import { createStatusObj } from '@/shared/lib';

const getStatus = (state: State) => state.auth.authStatus;
export const getUserData = (state: State) => state.auth.userData;

export const getAuthStatus = createStatusObj(getStatus);
