import React from 'react'

const ChatHistory = ({ messages, selectedUser}) => {
  const chatHistory = messages.map((msgElem, key)=>{
    return (<div className={`chat-history-item ${selectedUser === msgElem.from ? 'from' : 'to'}`} key={`msg-${key}`}>{msgElem.msg}</div>)
  }) 
  return (
    <div className="chat-history">{chatHistory}</div>
  );
  }

export default ChatHistory