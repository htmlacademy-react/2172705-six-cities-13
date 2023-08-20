import { createStatusObj } from '@/shared/lib';

const getCurrentUserStatus = (state: State) => state.auth.currentUserStatus;
const getLoginStatus = (state: State) => state.auth.loginAuthStatus;
export const getUserData = (state: State) => state.auth.userData;

export const getCurrentUserStatusObj = createStatusObj(getCurrentUserStatus);
export const getLoginStatusObj = createStatusObj(getLoginStatus);
