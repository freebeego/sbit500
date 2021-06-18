const selectUser = (state) => state.currentUser.user;
const selectCoins = (state) => state.currentUser.coins;
const selectPrevData = (state) => state.currentUser.prevData;

export {
  selectUser,
  selectCoins,
  selectPrevData
};
