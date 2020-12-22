import React from 'react';
import { Link } from 'react-router-dom';

import DeleteButton from '../Accessorizes/DeleteButtton/DeleteButton';

import cardStyles from '../../Styles/cardStyles';

export default function UserCard({
  userData,
  removeAllUserData,
  setCurrentUser,
}) {
  const { id, name, email, address, company } = userData;
  const parentheses = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  const onRemove = () => removeAllUserData(id);
  const onSetUser = () => setCurrentUser(userData);

  const userCardStyles = {
    ...cardStyles,
    width: '200px',
    height: '200px',
    backgroundColor: '#FACC01',
  };

  return (
    <div className="user-card" onClick={onSetUser} style={userCardStyles}>
      <DeleteButton deleteFunction={onRemove} />
      <h3>
        {name} - {parentheses}
      </h3>
      <div>
        <div>{email}</div>
        <div>{company.name}</div>
        <Link to="/map">
          <div>
            <div>LAT: {address.geo.lat}</div>
            <div>LNG: {address.geo.lng}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
