import React, { useEffect, useRef, useState } from 'react';
import './EditForm.css';

export default function EditForm({ postData, editPost, toggleEdit }) {
  const [titleInput, setTitleInput] = useState(postData.title);
  const [bodyInput, setBodyInput] = useState(postData.body);

  const [isTitleFocused, setIsTitleFocused] = useState(true);

  const focusTitleInput = useRef();
  const focusBodyInput = useRef();

  useEffect(() => {
    focusTitleInput.current.focus();
  }, []);

  const toggleFocus = () => {
    setIsTitleFocused(!isTitleFocused);
    isTitleFocused
      ? focusBodyInput.current.focus()
      : focusTitleInput.current.focus();
  };

  const handleEnterPress = (e) => {
    e.key === 'Enter' && toggleFocus();
  };

  const onTitleChange = ({ target }) => {
    setTitleInput(target.value);
  };

  const onBodyChange = ({ target }) => {
    setBodyInput(target.value);
  };

  const onSave = () => {
    editPost(postData.id, bodyInput, titleInput);
    toggleEdit();
  };

  const onCancel = () => toggleEdit();

  const styles = {
    formContainer: {
      backgroundColor: '#FFDB6B',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '250px',
      height: '350px',
      border: 'solid black 3px',
      borderRadius: '10px',
      zIndex: '1000',
      position: 'fixed',
      bottom: '-350px',
      left: '50%',
      transform: 'translate(-50%)',
    },
    inputsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderRadius: '5px',
      border: 'solid black 2px',
      margin: '8px',
    },
    button: {
      width: '80px',
      margin: '20px',
      borderRadius: '10px',
      border: 'none',
      padding: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div className="form-container" style={styles.formContainer}>
      <div className="inputs-container" style={styles.inputsContainer}>
        <input
          style={{
            ...styles.input,
            height: '30px',
          }}
          name="title"
          ref={focusTitleInput}
          type="text"
          value={titleInput}
          onChange={onTitleChange}
          onKeyPress={handleEnterPress}
        />
        <textarea
          style={{
            ...styles.input,
            height: '150px',
            resize: 'none',
          }}
          name="body"
          ref={focusBodyInput}
          type="text"
          value={bodyInput}
          onChange={onBodyChange}
          onKeyPress={handleEnterPress}
        />
      </div>
      <div className="buttons-container">
        <button
          style={{
            ...styles.button,
            backgroundColor: '#A2E891',
          }}
          onClick={onSave}
        >
          Save
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: '#242424',
            color: '#fff',
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
