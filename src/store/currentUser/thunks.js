import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserData = createAsyncThunk(
  'currentUser/fetchUserData',
  (state, { dispatch }) => {

  }
);



export {
  fetchUserData
};
