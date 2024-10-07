import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userInfo: {},
  },
  reducers: {
    initUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    changeUserLoginStatus: (state, { payload }) => {
      state.isLogin = payload;
    },
  },
});

export const { initUserInfo, changeUserLoginStatus } = userSlice.actions;
export default userSlice.reducer;
