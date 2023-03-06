import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './AuthReducer';
import SpendingsReducer from './SpendingsReducer';
import UserColorReducer from './UserColorReducer';
import UsernameReducer from './UsernameReducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    username: UsernameReducer,
    userColor: UserColorReducer,
    spendings: SpendingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>