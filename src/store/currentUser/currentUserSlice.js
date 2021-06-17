import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../constants/constants';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    user: users[0],
    coins: []
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCoins: (state, action) => {
      state.coins = action.payload;
    }
  }
});

export const {
  setUser,
  setCoins
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
