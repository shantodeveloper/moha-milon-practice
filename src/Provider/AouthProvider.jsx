import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase.init';

export const AouthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AouthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userContext = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuthStateChanged(auth, currentUser => {
  //   if (currentUser) {
  //     console.log('curent user', currentUser);
  //     setUser(currentUser)
  //   } else {
  //     console.log('no user log in');
  //     setUser(null)
  //   }
  // });

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    userContext,
    loading,
    signuser,
    user,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AouthContext.Provider value={authInfo}>{children}</AouthContext.Provider>
  );
};

export default AouthProvider;
