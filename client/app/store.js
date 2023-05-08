import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allClassSlice from '../../client/features/class/classSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    classes: allClassSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
