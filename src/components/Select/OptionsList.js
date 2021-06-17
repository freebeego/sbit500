import styled from 'styled-components';

const OptionsList = styled.ul`
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    border: 7px solid transparent;
    border-bottom: 7px solid #fff;
    position: absolute;
    top: -13px;
    left: 26px;
  }
`;

export default OptionsList;
