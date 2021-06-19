import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../constants/constants';
import calculateBalances from '../../utils/calculateBalances';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    user: users[0],
    coins: [],
    prevData: {},
    balances: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.coins = [];
      state.prevData = {};
      state.balances = {}
      state.user = action.payload;
    },
    setCoins: (state, action) => {
      state.coins = action.payload;
      state.balances = calculateBalances(action.payload);
    },
    setPrevData: (state, action) => {
      state.prevData = action.payload;
    }
  }
});

export const {
  setUser,
  setCoins,
  setPrevData
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
