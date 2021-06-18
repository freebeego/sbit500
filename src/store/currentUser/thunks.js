import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/Api';
import { setCoins } from './currentUserSlice';

const fetchUserData = createAsyncThunk(
  'currentUser/fetchUserData',
  (userId, { dispatch }) => {
    api.getUserData(userId)
      .then((userCoins) => dispatch(setCoins(userCoins)))
      .catch((err) => console.log(err));
  }
);

export {
  fetchUserData
};
