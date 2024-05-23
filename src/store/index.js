import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import communityReducer from './communitySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    community: communityReducer,
  },
});
