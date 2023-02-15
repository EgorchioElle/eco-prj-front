import { authStateType } from '@/types';

const { createSlice } = require('@reduxjs/toolkit');

const initialState: authStateType = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    test: (state: authStateType) => {
      console.log(state.isAuth);
    },
  },
});

export default AuthSlice.reducer;
export const { test } = AuthSlice.actions;
