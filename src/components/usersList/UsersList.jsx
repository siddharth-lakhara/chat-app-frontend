import React, { Component } from 'react'
import './UsersList.css';

const mockUsersList = ['siddharth', 'Swayam', 'Titas'];

export default class UsersList extends Component {
  render() {
    const usersList = mockUsersList.map((userName)=>{
      return (
        <div className="usersList-item" key={`${userName}`}>{userName.toUpperCase()}</div>
      );
    });
    return (
      <div className="chat-usersList">
        {usersList}
      </div>
    )
  }
}
