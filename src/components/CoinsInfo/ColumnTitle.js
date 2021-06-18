import styled from 'styled-components';

const ColumnTitle = styled.span`
  padding: 0 10px;
  height: 70px;
  box-sizing: border-box;
  font-family: 'Rubik', Arial, sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(even) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:first-of-type {
    justify-self: flex-start;
  }
`;

export default ColumnTitle;
