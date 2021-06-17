import styled from 'styled-components';

const OptionText = styled.span`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: #19191b;
    color: #fff;
  }
`;

export default OptionText;
