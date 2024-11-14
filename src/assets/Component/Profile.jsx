import React, { useContext } from 'react';
import { AouthContext } from '../../Provider/AouthProvider';

const Profile = () => {
  const { user } = useContext(AouthContext);

  return (
    <div>
      <h1 className="text-3xl">Tawhid ahmed</h1>
      <p>email{user?.email} </p>
    </div>
  );
};

export default Profile;
