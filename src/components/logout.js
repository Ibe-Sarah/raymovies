import {  signOut   } from 'firebase/auth';
import  { auth } from './firebase';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = () => {
        signOut(auth, email, password)
        .then(() => {
            navigate("/raymovies")
        // Sign-out successful.
        alert("Sign-out successful");
      }).catch((error) => {
        // An error happened.
        alert("Error signing out:", error);
      });
    };
  
    return (
      <button className='sign-out archivo' onClick={handleLogout}>Logout</button>
    );
  };
  
  export default LogoutButton;