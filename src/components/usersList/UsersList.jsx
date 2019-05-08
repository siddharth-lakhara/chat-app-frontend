import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSelectedUser as changeSelectedUserAction } from '../../redux/actions';
import './UsersList.css';

export const UsersList = ({ usersList, selectedUser, changeSelectedUser }) => {
  const usersListWrapper = usersList.map((userName) => {
    const selected = userName === selectedUser;
    return (
      <div
        className={`usersList-item ${selected ? 'selected' : ''}`}
        key={`${userName}`}
        onClick={() => { changeSelectedUser(userName); }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            changeSelectedUser(userName);
          }
        }}
      >
        {userName.toUpperCase()}
      </div>
    );
  });
  return (
    <div className="chat-usersList">
      {usersListWrapper}
    </div>
  );
};

UsersList.propTypes = {
  usersList: PropTypes.instanceOf(Array).isRequired,
  selectedUser: PropTypes.string.isRequired,
  changeSelectedUser: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ users }) => ({
  ...users,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  changeSelectedUser: selectedUser => dispatch(changeSelectedUserAction(selectedUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
