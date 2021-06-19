import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/Api';
import { setCoins, setPrevData } from './currentUserSlice';

let timeoutId = null;

const fetchUserData = createAsyncThunk(
  'currentUser/fetchUserData',
  (userId, { dispatch, getState }) => {
    if (timeoutId) {
      clearImmediate(timeoutId);
    }
    api.getUserData(userId)
      .then((userCoins) => {
        const state = getState();
        dispatch(setCoins(userCoins));
        dispatch(
          setPrevData(
            state.currentUser.coins.reduce((acc, coin) => ({ ...acc, [coin.coin]: coin }) , {})
          )
        );
        timeoutId = setTimeout(
          () => {
            dispatch(setPrevData({}));
          },
          0
        );
      })
      .catch((err) => console.log(err));
  }
);

export {
  fetchUserData
};
