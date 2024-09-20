import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlices';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
