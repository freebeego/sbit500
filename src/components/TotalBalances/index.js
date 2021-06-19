import React from 'react';
import TotalBalancesList from './TotalBalancesList';
import TotalBalance from './TotalBalance';
import Type from './Type';
import Amount from './Amount';
import { selectBalances } from '../../store/currentUser/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TotalBalances({ balances }) {
  return (
    <TotalBalancesList>
      <TotalBalance>
        <Type>Общий баланс (сумма):</Type>
        <Amount>{balances.totalBalance ? `${balances.totalBalance} USDT` : ''}</Amount>
      </TotalBalance>
      <TotalBalance>
        <Type>В ордерах (сумма):</Type>
        <Amount>{balances.totalBalance ? `${balances.frozen} USDT` : ''}</Amount>
      </TotalBalance>
      <TotalBalance>
        <Type>Свободный объем (сумма):</Type>
        <Amount>{balances.totalBalance ? `${balances.available} USDT` : ''}</Amount>
      </TotalBalance>
    </TotalBalancesList>
  );
}

const mapStateToProps = (state) => ({
  balances: selectBalances(state),
});

TotalBalances.propTypes = {
  balances: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(TotalBalances);
