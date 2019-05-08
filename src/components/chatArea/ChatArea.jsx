import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { updateHistory, updateText as updateTextAction, sendMsg as sendMsgAction } from '../../redux/actions';
import ChatHistory from './ChatHistory';
import './ChatArea.css';

export const ChatArea = ({
  selectedUser, history, updateText, sendMsg,
}) => {
  const messages = (history && history.messages) || [];
  const currentText = (history && history.currentText) || '';
  const userNameArray = selectedUser.toLowerCase().split('');
  const displayName = userNameArray.length && ((userNameArray[0].toUpperCase() + userNameArray.splice(1).join('')) || '');
  return (
    <div className="chat-chatArea">
      <div className="chat-userName">{displayName}</div>
      <ChatHistory messages={messages} selectedUser={selectedUser} />
      <div className="chat-textContainer">
        <textarea
          className="chat-typingArea"
          placeholder="Type your message"
          value={currentText}
          onChange={updateText}
        />
        <button
          className="chat-sendMsg"
          type="button"
          onClick={() => (selectedUser && sendMsg(selectedUser, currentText))}
          disabled={currentText.length === 0}
        >
          SEND
        </button>
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  selectedUser: PropType.string.isRequired,
  history: PropType.shape({
    messages: PropType.array,
    currentText: PropType.string,
  }),
  updateText: PropType.func.isRequired,
  sendMsg: PropType.func.isRequired,
};

ChatArea.defaultProps = {
  history: {},
};

/* istanbul ignore next */
const mapStateToProps = ({ users }) => ({
  selectedUser: users.selectedUser,
  history: users.history[users.selectedUser],
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  updateText: e => dispatch(updateTextAction(e)),
  sendMsg: (selectedUser, currentText) => {
    dispatch(updateHistory());
    dispatch(sendMsgAction(selectedUser, currentText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
