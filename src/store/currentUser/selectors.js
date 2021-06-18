const selectUser = (state) => state.currentUser.user;
const selectCoins = (state) => state.currentUser.coins;

export {
  selectUser,
  selectCoins
};
