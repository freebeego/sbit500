import styled from 'styled-components';
import { users } from '../../constants/constants';

const OptionsListContainer =styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? `${10 + (50 * users.length)}px` : '0'};
  transition: height 0.4s;
  overflow: hidden;
`;

export default OptionsListContainer;
