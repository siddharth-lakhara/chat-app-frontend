import React, { Component } from 'react';
import './App.css';
import UsersList from './components/usersList';
import ChatArea from './components/chatArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Chat App
        </div>
        <div className="App-chat">
          <UsersList />
          <ChatArea />
        </div>
      </div>
    );
  }
}

export default App;
