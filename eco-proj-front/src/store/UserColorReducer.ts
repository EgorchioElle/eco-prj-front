import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = '#4ae184';

const UserColorSlice = createSlice({
  name: 'userColor',
  initialState,
  reducers: {
    setUserColor: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export default UserColorSlice.reducer;
export const { setUserColor } = UserColorSlice.actions;