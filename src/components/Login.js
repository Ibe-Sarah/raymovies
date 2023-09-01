import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import app, { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, sendEmailVerification } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);
 
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            alert('Logged-In Sucessfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
        });
       
    }


   

 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                                      
                                                       
                        <form>                                              
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
                                <label htmlFor="password">
                               </label>


                                <div className='relative'>
                                <input className='rounded-md  appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mt-6'
                                   style={{ zIndex: 0 }}
                                   type={passwordVisible ? 'text' : 'password'}
                                    name="password"
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />

                            <span  onClick={togglePasswordVisibility} className='icon'>
                            {passwordVisible ? <FaEyeSlash className='' /> : <FaEye className=''/>}
                            </span>

                            </div>
                            </div>
                                                
                            <div>
                                <button   className='bg-navy field text-white archivo'                                 
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
{/*                        
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p> */}
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login