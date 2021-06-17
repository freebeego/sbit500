import React from 'react';
import { users } from '../../constants/constants';
import { selectUser } from '../../store/currentUser/selectors';
import { setUser } from '../../store/currentUser/currentUserSlice';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './Container';
import CurrentOptionContainer from './CurrentOptionContainer';
import CurrentOption from './CurrentOption';
import OptionsListContainer from './OptionsListContainer';
import OptionsList from './OptionsList';
import Option from './Option';
import OptionText from './OptionText';

function Select({ currentUser, setUser }) {
  const containerRef = React.useRef(null);

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(
    () => {
      function onMouseDown(e) {
        const isContainer = e.target === containerRef.current;
        const isContainerChild = containerRef.current.contains(e.target);
        if (isOpen && !isContainer && !isContainerChild) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', onMouseDown);

      return () => {
        document.removeEventListener('mousedown', onMouseDown);
      };
    },
    [isOpen]
  );

  function onCurrentOption() {
    setIsOpen(!isOpen);
  }

  function onOption(user) {
    if (user.id !== currentUser.id) {
      setUser(user);
    }
    setIsOpen(false);
  }

  return (
    <Container ref={containerRef}>
      <CurrentOptionContainer>
        <CurrentOption  isOpen={isOpen} onClick={onCurrentOption}>
          {currentUser.name}
        </CurrentOption>
      </CurrentOptionContainer>
      <OptionsListContainer isOpen={isOpen}>
        <OptionsList>
          {users.map((user) =>
            <Option key={user.id} onClick={() => onOption(user)}>
              <OptionText>{user.name}</OptionText>
            </Option>
          )}
        </OptionsList>
      </OptionsListContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

Select.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  setUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
