import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Firebase/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user,loading}=useContext(AuthProvider)
    if(loading){
        return <p className='text-4xl'>Loading...</p>
    }
    if(!user){
        return <Navigate to="/signin" state={{ from: location }} replace />;
     }
     return children
    
};

export default PrivateRouter;