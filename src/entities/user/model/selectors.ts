import { createStatusObj } from '@/shared/lib';

const getCurrentUserStatus = (state: State) => state.user.currentUserStatus;
const getLoginStatus = (state: State) => state.user.loginAuthStatus;
export const getUserData = (state: State) => state.user.userData;

export const getCurrentUserStatusObj = createStatusObj(getCurrentUserStatus);
export const getLoginStatusObj = createStatusObj(getLoginStatus);
