import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.config';
import { useEffect } from 'react';

const auth =getAuth(app)
export const AuthProvider =createContext() 



const AuthContext = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,SetLoading]=useState(true)
    const googleProvider =new GoogleAuthProvider()

    const signin=(email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signup =(email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googlesignin =()=>{
        SetLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            SetLoading(false)

        })
        return()=>{
            return unSubscribe()
        }
    },[])


    const authinfo={signin,signup,googlesignin,signout,user,loading}
    return (
        <div>
           <AuthProvider.Provider value={authinfo}>
                {children}
            </AuthProvider.Provider> 
        </div>
    );
};

export default AuthContext;