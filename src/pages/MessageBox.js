import React from 'react';

function MessageBox({ user, text }) {
  return (
    <div className="messagebox">
      <b>{user}</b> {text}
    </div>
  );
}

export default MessageBox;
