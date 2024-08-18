import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(false);

    // create user with email pass
    const createUserByEmailPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // sign in with email pass
    const signInWithEmailPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // create user by google
    const signInByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // current sign in user
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user, createUserByEmailPass, signInByGoogle, signInWithEmailPass
    }

    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>loading...</div>
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;