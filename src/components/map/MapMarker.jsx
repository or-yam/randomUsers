import React from 'react';

export default function MapMarker({ name }) {
  const styles = {
    color: 'black',
    background: '#FECC2F',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={styles}>
      {name}
      <img
        width="80px"
        height="auto"
        src="https://www.flaticon.com/svg/static/icons/svg/774/774655.svg"
        alt="bee"
      />
    </div>
  );
}
