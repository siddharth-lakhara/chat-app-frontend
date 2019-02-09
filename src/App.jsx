import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import UsersList from './components/usersList';
import ChatArea from './components/chatArea';
import {userLogin} from './redux/actions';

export class Pages extends React.Component {
  state = {
    userName: '',
  };

  handleUsernameChange = ({target}) => {
    this.setState({
      userName: target.value,
    });
  }

  render() {
    const { userLoggedin, socketOpen, loginError, userLogin } = this.props;
    const {userName} = this.state;
    const { handleUsernameChange } = this;
    if (socketOpen && userLoggedin) {
      return (
        <div className="App-chat">
          <UsersList />
          <ChatArea />
        </div>
      );
    } else if (socketOpen && !userLoggedin) {
      return (
        <div className="App-chat login">
          <div className="login-wrapper">
            <div className="login-error">{loginError}</div>
            <input placeholder="Username" className="login-userName-input" value={userName} onChange={handleUsernameChange}/>
            <button 
              className="login-button" 
              onClick={()=>{userLogin(userName);}}
            >
              Login
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App-chat">
          Opening Socket
        </div>
      );
    }
  }
}

export const App = ({ userLoggedin, socketOpen, loginError, userLogin}) => {
  return (
    <div className="App">
      <div className="App-header">
        Chat App
      </div>
      <Pages 
        userLoggedin={userLoggedin} 
        socketOpen={socketOpen} 
        userLogin={userLogin}
        loginError={loginError}
      />
    </div>
  );
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
  socketOpen: state.sockets.socketOpen,
  userLoggedin: state.users.userLoggedIn,
  loginError: state.users.loginError,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  userLogin: (userName) => (dispatch(userLogin(userName))),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
