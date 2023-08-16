import { createStatusObj } from '@/shared/lib';

const getUserStatus = (state: State) => state.auth.currentUserStatus;
const getLoginStatus = (state: State) => state.auth.loginAuthStatus;
export const getUserData = (state: State) => state.auth.userData;

export const getCurrentUserStatus = createStatusObj(getUserStatus);
export const getLoginAuthStatus = createStatusObj(getLoginStatus);
