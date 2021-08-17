import React from 'react';
import { IoSend } from 'react-icons/io5';

function Input({ value, onChange, onKeyPress, onClick }) {
  return (
    <div className="input-container">
      <IoSend onClick={onClick} className="svg-io" />
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="input-inside"
      />
    </div>
  );
}

export default Input;
