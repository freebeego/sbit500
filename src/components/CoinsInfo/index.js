import React from 'react';
import { selectCoins, selectPrevData } from '../../store/currentUser/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from './Container';
import ColumnTitles from './ColumnTitles';
import ColumnTitle from './ColumnTitle';
import CoinsList from './CoinsList';
import Coin from './Coin';
import CoinTitle from './CoinTitle';
import CoinImg from './CoinImg';
import CoinName from './CoinName';
import CoinData from './CoinData';

function CoinsInfo({ currentUserCoins, prevData }) {
  const computeTrend = (current, previous) => current > previous ? 'up' : current < previous ? 'down' : '';

  return (
    <Container>
      <ColumnTitles>
        <ColumnTitle>Монета</ColumnTitle>
        <ColumnTitle>Курс к USDT</ColumnTitle>
        <ColumnTitle>Общий баланс</ColumnTitle>
        <ColumnTitle>В ордерах</ColumnTitle>
        <ColumnTitle>Свободный объем</ColumnTitle>
      </ColumnTitles>
      <CoinsList>
        {currentUserCoins.map((coin) =>
          <Coin key={coin.id}>
            <CoinTitle>
              <CoinImg src={coin.coin_img} alt={coin.coin_name} />
              <CoinName>{`${coin.coin_name} (${coin.coin})`}</CoinName>
            </CoinTitle>
            <CoinData className={computeTrend(coin.price, prevData[coin.coin]?.price) || 'no-changes'}>
              {coin.price}
            </CoinData>
            <CoinData className={computeTrend(coin.balance, prevData[coin.coin]?.balance) || 'no-changes'}>
              {coin.balance}
            </CoinData>
            <CoinData className={computeTrend(coin.frozen, prevData[coin.coin]?.frozen) || 'no-changes'}>
              {coin.frozen}
            </CoinData>
            <CoinData className={computeTrend(coin.available, prevData[coin.coin]?.available) || 'no-changes'}>
              {coin.available}
            </CoinData>
          </Coin>
        )}
      </CoinsList>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUserCoins: selectCoins(state),
  prevData: selectPrevData(state)
});

CoinsInfo.propTypes = {
  currentUserCoins: PropTypes.array.isRequired,
  prevData: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CoinsInfo);
