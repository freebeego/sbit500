import styled from 'styled-components';

const CoinData = styled.span`
  font-family: 'Rubik', Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.no-changes {
    color: #fff;
    transition: color 1s;
  }

  &.up {
    color: #4caa3c;
  }

  &.down {
    color: #df2828;
  }
`;

export default CoinData;
