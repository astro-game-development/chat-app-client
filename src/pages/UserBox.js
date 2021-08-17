import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function UserBox({ user }) {
  return (
    <div className="messagebox userbox">
      <FaUserCircle />
      <span>{user}</span>
    </div>
  );
}

export default UserBox;
