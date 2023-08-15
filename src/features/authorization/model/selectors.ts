import { createStatusObj } from '@/shared/lib';

const getMeStatus = (state: State) => state.auth.meAuthStatus;
const getLoginStatus = (state: State) => state.auth.loginAuthStatus;
export const getUserData = (state: State) => state.auth.userData;

export const getMeAuthStatus = createStatusObj(getMeStatus);
export const getLoginAuthStatus = createStatusObj(getLoginStatus);
