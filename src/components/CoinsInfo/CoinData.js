import styled from 'styled-components';

const CoinData = styled.span`
  font-family: 'Rubik', Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export default CoinData;
