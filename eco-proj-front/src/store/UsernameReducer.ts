import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = 'Anonymous';

const UsernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export default UsernameSlice.reducer;
export const { setUsername } = UsernameSlice.actions;