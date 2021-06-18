import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/Api';
import { setCoins, setPrevData } from './currentUserSlice';

let immediateId = null;

const fetchUserData = createAsyncThunk(
  'currentUser/fetchUserData',
  (userId, { dispatch, getState }) => {
    if (immediateId) {
      clearImmediate(immediateId);
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
        immediateId = setImmediate(
          () => {
            dispatch(setPrevData({}));
          }
        );
      })
      .catch((err) => console.log(err));
  }
);

export {
  fetchUserData
};
