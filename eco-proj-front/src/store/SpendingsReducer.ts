import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { spendingType } from '@/utils/types';

const initialState: spendingType[] = [
    {
        category: 'supermarkets',
        value: 2200
    },
    {
        category: 'clothes',
        value: 5200
    },
    {
        category: 'other',
        value: 1500
    },
    {
        category: 'fastFood',
        value: 1500
    }
];

const SpendingsSlice = createSlice({
  name: 'spending',
  initialState,
  reducers: {
    addSpending: (state, action: PayloadAction<spendingType>) => {
      return (state = [ ...state, action.payload ]);
    },
    setSpendings: (state, action: PayloadAction<spendingType[]>) => {
      return (state = action.payload);
    },
  },
});

export default SpendingsSlice.reducer;
export const { addSpending, setSpendings } = SpendingsSlice.actions;