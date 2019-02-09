import React from 'react'
import { connect } from 'react-redux';
import { changeSelectedUser } from '../../redux/actions'
import PropTypes from 'prop-types';
import './UsersList.css';

export const UsersList = ({ usersList, selectedUser, changeSelectedUser}) => {
  const usersListWrapper = usersList.map((userName) => {
    const selected = userName === selectedUser;
    return (
      <div className={`usersList-item ${selected ? 'selected' : ''}`} key={`${userName}`} onClick={() => { changeSelectedUser(userName) }}>{userName.toUpperCase()}</div>
    );
  });
  return (
    <div className="chat-usersList">
      {usersListWrapper}
    </div>
  )
}

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired,
  selectedUser: PropTypes.string.isRequired,
  changeSelectedUser: PropTypes.func.isRequired,
}

const mapStateToProps = ({users}) => ({
  ...users,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedUser: (selectedUser) => dispatch(changeSelectedUser(selectedUser)),

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);