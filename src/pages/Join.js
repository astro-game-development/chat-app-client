import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className="joinContainer">
      <p>Chat React App</p>
      <p>Join</p>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="form-control inputStyled"
      ></input>
      <input
        placeholder="room"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        className="form-control inputStyled"
      ></input>
      <Link
        onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="button" className="btn btn-primary">
          Sign-in
        </button>
      </Link>
    </div>
  );
}

export default Join;
