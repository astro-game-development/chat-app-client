import React, { useEffect, useRef } from 'react';
import Input from './Input';
import MessageBox from './MessageBox';
import UserBox from './UserBox';

function InfoBar({
  room,
  message,
  setMessage,
  messages,
  sendMessage,
  name,
  Users,
}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="InfoBar">
      <h3>
        {name ? name : 'Loading'} : {room ? room : 'Loading'}
      </h3>
      <div className="leftInnerContainer">
        <div className="message-box-contain">
          {Users.map((e, i) => {
            return <UserBox key={i} user={e.name} />;
          })}
        </div>
      </div>
      <div className="RightInnerContainer">
        <div id="messageBox" className="message-box-contain">
          {messages.map((e, i) => {
            return <MessageBox key={i} user={e.user} text={e.text} />;
          })}
          <div ref={messagesEndRef} />
        </div>
        <Input
          onClick={(e) => {
            sendMessage(e);
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        ></Input>
      </div>
    </div>
  );
}

export default InfoBar;
