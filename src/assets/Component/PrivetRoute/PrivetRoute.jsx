import React, { useContext } from 'react';
import { AouthContext } from '../../../Provider/AouthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AouthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={'/login'}></Navigate>;
};

export default PrivetRoute;
