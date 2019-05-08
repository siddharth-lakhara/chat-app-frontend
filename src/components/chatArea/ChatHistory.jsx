import React from 'react';
import PropTypes from 'prop-types';

const ChatHistory = ({ messages, selectedUser }) => {
  const chatHistory = messages.map((msgElem, key) => (<div className={`chat-history-item ${selectedUser === msgElem.from ? 'from' : 'to'}`} key={`msg-${key}`}>{msgElem.msg}</div>));
  return (
    <div className="chat-history">{chatHistory}</div>
  );
};

ChatHistory.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  selectedUser: PropTypes.string.isRequired,
};

export default ChatHistory;
