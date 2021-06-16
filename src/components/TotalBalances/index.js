import React from 'react';
import TotalBalancesList from './TotalBalancesList';
import TotalBalance from './TotalBalance';
import Type from './Type';
import Amount from './Amount';

function TotalBalances() {
  return (
    <TotalBalancesList>
      <TotalBalance>
        <Type>Общий баланс (сумма):</Type>
        <Amount>1.12345 USDT</Amount>
      </TotalBalance>
      <TotalBalance>
        <Type>В ордерах (сумма):</Type>
        <Amount>3.34567 USDT</Amount>
      </TotalBalance>
      <TotalBalance>
        <Type>Свободный объем (сумма):</Type>
        <Amount>3.34567 USDT</Amount>
      </TotalBalance>
    </TotalBalancesList>
  );
}

export default TotalBalances;
