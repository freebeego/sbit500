const selectUser = (state) => state.currentUser.user;
const selectCoins = (state) => state.currentUser.coins;
const selectPrevData = (state) => state.currentUser.prevData;
const selectBalances = (state) => state.currentUser.balances;

export {
  selectUser,
  selectCoins,
  selectPrevData,
  selectBalances
};
