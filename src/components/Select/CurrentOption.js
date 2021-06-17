import styled from 'styled-components';
import arrowImage from '../../images/arrow.svg';

const CurrentOption = styled.span`
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 18px;
  line-height: 30px;
  color: #fff;
  letter-spacing: 0.44px;
  height: 100%;
  padding: 0 26px;
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;

  &:after {
    content: '';
    width: 18px;
    height: 10px;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotateX(${({ isOpen }) => isOpen ? '180deg' : '0'});
    transition: transform 0.4s;
    position: absolute;
    top: 20px;
    right: 14px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export default CurrentOption;
