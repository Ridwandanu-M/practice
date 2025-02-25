import React, { useState } from 'react';
import { FaFingerprint, FaEye , FaRegEyeSlash  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Login = () => {

    const [showPassword, setShowPassword] = useState(true);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className='container w-full h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center min-h-screen' 
             style={{ backgroundImage: "url('/BG_login_page.jpg')" }}>
            <div className='w-[90%] p-5 bg-gray-900 max-w-sm md:max-w-md lg:max-w-lg flex-col flex items-center gap-3 rounded-xl shadow-slate shadow-lg shadow-slate-500'>
                <img src='' className='w-12 md:w-16 lg:w-20'/>
                <h1 className='text-lg md:text-xl font-semibold'> Welcome Back</h1>
                <p className='text-xs md:text-md text-gray-400 text-center'> Don`t have an account? <span className='text-white'>Sign Up</span></p>
                
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-full flex items-center bg-gray-800 p-2 rounded-md gap-2'>
                        <MdAlternateEmail />
                        <input 
                            type="email" 
                            placeholder='Email Account' 
                            className='bg-transparent border-0 w-full outline-none text-sm md:text-base'/>
                    </div>
                    <div className='relative w-full flex items-center bg-gray-800 p-2 rounded-md gap-2'>
                        <FaFingerprint />
                        <input 
                            type={showPassword ? "password" : "text"} 
                            placeholder='Password' 
                            className='bg-transparent border-0 w-full outline-none text-sm md:text-base'/>
                        {showPassword ? (
                            <FaRegEyeSlash 
                                className='absolute right-5 cursor-pointer'
                                onClick={togglePasswordVisibility}/>
                        ) : (
                            <FaEye 
                                className='absolute right-5 cursor-pointer'
                                onClick={togglePasswordVisibility}/>
                        )}
                    </div>
                </div>

                <button className='w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-sm md:text-base'>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
