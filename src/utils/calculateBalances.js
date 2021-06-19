function calculateBalances(coins) {
  const balances = { totalBalance: 0, frozen: 0, available: 0 };
  coins.forEach((coin) => {
    balances.totalBalance = balances.totalBalance + Number(coin.balance) * Number(coin.price);
    balances.frozen = balances.frozen + Number(coin.frozen) * Number(coin.price);
    balances.available = balances.available + Number(coin.available) * Number(coin.price);
  });
  for (let balance in balances) {
    balances[balance] = balances[balance].toFixed(5).replace(/0*$/, '');
  }

  return balances;
}

export default calculateBalances;
