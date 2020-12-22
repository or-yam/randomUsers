import React from 'react';
import Loading from '../Accessorizes/LoadingAnimation/Loading';
import UserCard from './UserCard';

import containerStyles from '../../Styles/containerStyles';

export default function Users({ users, removeAllUserData, setCurrentUser }) {
  return users.length ? (
    <div className="users-container" style={containerStyles}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          userData={user}
          removeAllUserData={removeAllUserData}
          setCurrentUser={setCurrentUser}
        />
      ))}
    </div>
  ) : (
    <Loading />
  );
}
