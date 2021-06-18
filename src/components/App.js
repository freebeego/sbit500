import React from 'react';
import Logo from './Logo';
import TotalBalances from './TotalBalances';
import Select from './Select';
import CoinsInfo from './CoinsInfo';
import { selectUser } from '../store/currentUser/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData } from '../store/currentUser/thunks';

function App({ currentUserId, fetchCoins }) {
  React.useEffect(
    () => {
      fetchCoins(currentUserId)
      const intervalId = setInterval(
        () => {
          fetchCoins(currentUserId)
        },
        10000
      );

      return () => {
        clearInterval(intervalId)
      }
    },
    [currentUserId, fetchCoins]
  );

  return (
    <>
      <Logo />
      <TotalBalances />
      <Select />
      <CoinsInfo />
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUserId: selectUser(state).id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: (userId) => dispatch(fetchUserData(userId))
});

App.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  fetchCoins: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
