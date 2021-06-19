import styled from 'styled-components';

const Option = styled.li`
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 18px;
  line-height: 30px;
  color: #19191b;
  letter-spacing: 0.44px;
  background-color: #fff;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-of-type {
    border-bottom: none;
  }
`;

export default Option;
