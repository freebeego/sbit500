import React from 'react';
import { selectCoins } from '../../store/currentUser/selectors';
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

function CoinsInfo({ currentUserCoins }) {
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
            <CoinData>{coin.price}</CoinData>
            <CoinData>{coin.balance}</CoinData>
            <CoinData>{coin.frozen}</CoinData>
            <CoinData>{coin.available}</CoinData>
          </Coin>
        )}
      </CoinsList>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUserCoins: selectCoins(state)
});

CoinsInfo.propTypes = {
  currentUserCoins: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CoinsInfo);
