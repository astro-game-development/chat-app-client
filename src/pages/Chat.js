import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import './Chat.css';
import InfoBar from './InfoBar';

let socket;

function Chat({ location }) {
  const [name, setName] = useState('');
  const [Users, setUsers] = useState([]);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = process.env.REACT_APP_SOCKET_API;
  // console.log(ENDPOINT);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(process.env.REACT_APP_SOCKET_API);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  // console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        {
          <InfoBar
            Users={Users}
            name={name}
            room={room}
            messages={messages}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        }
      </div>
    </div>
  );
}

export default Chat;
