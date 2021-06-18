import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../constants/constants';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    user: users[0],
    coins: [],
    prevData: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.coins = [];
      state.prevData = {};
      state.user = action.payload;
    },
    setCoins: (state, action) => {
      state.coins = action.payload;
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
