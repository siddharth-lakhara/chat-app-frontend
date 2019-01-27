import React from 'react'
import PropType from 'prop-types';
import { connect } from 'react-redux'
import { sendMsg, updateText} from '../../redux/actions';
import './ChatArea.css';

const ChatArea = ({ selectedUser, textValue, updateText, sendMsg }) => {
  const userNameArray = selectedUser.toLowerCase().split('');
  const displayName = userNameArray[0].toUpperCase() + userNameArray.splice(1).join('');
  return (
    <div className="chat-chatArea">
      <div className="chat-userName">{displayName}</div>
      <div className="chat-history">Chat history</div>
      <div className="chat-textContainer">
        <textarea 
          className="chat-typingArea" 
          placeholder="Type your message" 
          value={textValue}
          onChange={updateText}
        />
        <button className="chat-sendMsg" onClick={() => {sendMsg();}}>SEND</button>
      </div>
    </div>
  )
}

ChatArea.propType = {
  selectedUser: PropType.string.isRequired,
  textValue: PropType.string.isRequired,
  updateText: PropType.func.isRequired,
  sendMsg: PropType.func.isRequired,
}

const mapStateToProps = ({users}) => ({
  currentUser: users.currentUser,
  selectedUser: users.selectedUser,
  history: users.history[users.usersList.selectedUser],
});

const updateHistory = () => {};

const mapDispatchToProps = (dispatch) => ({
  sendMsg: (value, to, updateText) => {
    // dispatch(updateHistory(from, to, updateText));
    // dispatch(sendMsg(value));
  },
  updateText: (e) => dispatch(updateText(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
