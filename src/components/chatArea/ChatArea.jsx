import React from 'react'
import PropType from 'prop-types';
import { connect } from 'react-redux'
import { updateHistory, updateText, sendMsg} from '../../redux/actions';
import ChatHistory from './ChatHistory';
import './ChatArea.css';

const ChatArea = ({ selectedUser, history, updateText, sendMsg }) => {
  const {messages, currentText} = history;
  const userNameArray = selectedUser.toLowerCase().split('');
  const displayName = userNameArray[0].toUpperCase() + userNameArray.splice(1).join('');
  return (
    <div className="chat-chatArea">
      <div className="chat-userName">{displayName}</div>
      <ChatHistory messages={messages} selectedUser={selectedUser}/>
      <div className="chat-textContainer">
        <textarea 
          className="chat-typingArea" 
          placeholder="Type your message" 
          value={currentText}
          onChange={updateText}
        />
        <button 
          className="chat-sendMsg" 
          onClick={() => { sendMsg(selectedUser, currentText);}} 
          disabled={currentText.length===0}
        >
          SEND
        </button>
      </div>
    </div>
  )
}

ChatArea.propType = {
  selectedUser: PropType.string.isRequired,
  history: PropType.object.isRequired,
  updateText: PropType.func.isRequired,
  sendMsg: PropType.func.isRequired,
}

const mapStateToProps = ({users}) => ({
  selectedUser: users.selectedUser,
  history: users.history[users.selectedUser],
});

const mapDispatchToProps = (dispatch) => ({
  updateText: (e) => dispatch(updateText(e)),
  sendMsg: (selectedUser, currentText) => {
    dispatch(updateHistory());
    dispatch(sendMsg(selectedUser, currentText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
