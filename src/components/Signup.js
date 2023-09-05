import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
import './sign-in.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Account Created- Login to continue');
            navigate("/raymovies")
            window.localStorage.setItem('emailForSignIn', email);

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
            // ..
        });
 
   
    }

  
  return (
    <main >        
        <section>
            <div>
                <div>                                                                                            
                    <form className=' '>                                                                                            
                    <div className=''>
                                <label htmlFor="email-address">
                           
                                </label>
                                <input className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm '
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                        <div className=''>
                            <label htmlFor="password" className='archivo'>
                            </label>

                            <div className='relative'>
                            <input className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mt-6 '
                              style={{ zIndex: 0 }}
                                type={passwordVisible ? 'text' : 'password'}
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />

                            <span  onClick={togglePasswordVisibility} className='icon'>
                            {passwordVisible ? <FaEyeSlash className='' /> : <FaEye className=''/>}
                            </span>
                            </div>
                            
                        </div>                                             
                        
                        <button className='bg-navy field text-white archivo'
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>

                                                     
                    </form>
                   
                    {/* <p>
                        Already have an account?{' '}
                        <NavLink to="/" >
                           Login
                        </NavLink>
                    </p>                    */}
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup
