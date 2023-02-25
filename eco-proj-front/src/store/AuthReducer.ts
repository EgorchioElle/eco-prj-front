import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: boolean = true;

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { setIsAuth } = AuthSlice.actions;
