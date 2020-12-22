import React from 'react';
import UserCard from './UserCard';

import containerStyles from '../../styles/containerStyles';

export default function Users({
  users,
  removeAllUserData,
  setCurrentUser,
  currentUSer,
}) {
  return (
    <div className="users-container" style={containerStyles}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          currentUSer={currentUSer}
          userData={user}
          removeAllUserData={removeAllUserData}
          setCurrentUser={setCurrentUser}
        />
      ))}
    </div>
  );
}
