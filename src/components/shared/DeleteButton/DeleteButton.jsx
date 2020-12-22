import React from 'react';
import './DeleteButton.css';

export default function DeleteButton({ deleteFunction }) {
  return (
    <button
      className="delete-btn"
      onClick={deleteFunction}
      style={{
        position: 'absolute',
        right: '15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
      }}
    >
      <span>❌</span>
    </button>
  );
}
