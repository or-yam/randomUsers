import React from 'react';
import './Loading.css';
export default function Loading() {
  // const styles = {};

  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
      <div className="text">Loading...</div>
    </div>
  );
}
