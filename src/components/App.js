import React from 'react';
import styled from 'styled-components';
import Logon from './Logo';

const TotalBalances = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: unset;
`;

const TotalBalance = styled.li`

`;

const Type = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  opacity: 0.5;
`;

const Amount = styled.span`

`;

function App() {
  return (
    <>
      <Logon />
      <TotalBalances>
        <TotalBalance>

        </TotalBalance>
      </TotalBalances>
    </>
  );
}

export default App;
