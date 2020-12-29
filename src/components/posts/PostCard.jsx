import React, { useState } from 'react';

import EditForm from '../EditModal/EditForm';
import DeleteButton from '../shared/DeleteButton/DeleteButton';

import cardStyles from '../../styles/cardStyles';

export default function PostCard({ postData, removePost, editPost }) {
  const { id, title, body } = postData;

  const [isEdit, setIsEdit] = useState(false);

  const onRemove = () => removePost(id);
  const toggleEdit = () => setIsEdit(!isEdit);

  const postCardStyles = {
    ...cardStyles,
    backgroundColor: '#FFE7B6',
    width: '350px',
    maxWidth: '350px',
  };

  return (
    <>
      {isEdit && (
        <EditForm
          postData={postData}
          editPost={editPost}
          toggleEdit={toggleEdit}
        />
      )}
      <div onClick={toggleEdit} style={postCardStyles}>
        <DeleteButton deleteFunction={onRemove} />
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </>
  );
}
