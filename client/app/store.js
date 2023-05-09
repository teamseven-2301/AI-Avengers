import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import classSelectReducer from '../features/class/classSlice';
import authReducer from '../features/auth/authSlice';
import settingSelectReducer from '../features/settings/settingSelectSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    classSelect: classSelectReducer,
    settingSelect: settingSelectReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
