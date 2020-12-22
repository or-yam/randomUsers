import React from 'react';

export default function Header({ text }) {
  const styles = {
    textAlign: 'center',
  };
  return <h1 style={styles}>🐝 {text} 🐝</h1>;
}
