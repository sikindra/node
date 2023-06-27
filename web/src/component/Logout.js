import React from 'react'
import AuthUser from './AuthUser';
const Logout = () => {

    const {token,logout} = AuthUser();
   
    return (
        logout()
    );
  
}

export default Logout
