import React from 'react';
import './DeleteButton.css';

export default function DeleteButton({ deleteFunction }) {
  const styles = {
    position: 'absolute',
    right: '15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
  };

  return (
    <button className="delete-btn" onClick={deleteFunction} style={styles}>
      <span>❌</span>
    </button>
  );
}
