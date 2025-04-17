'use client'
import React from 'react'
import { SignInCredentials } from './action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Form = () => {
    const [message, setMessage] = useState('')
    const router = useRouter();
    const handleCredentialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        console.log(formdata);
        const res = await SignInCredentials(formdata);
        console.log("Login Response:", res);
        if (res.error) {
            setMessage('Please verify your email before logging in.');
        } else {
            setMessage('');
        }
        if (res.status === "success") {
            router.push("/create_profile");
        }
    };
    return (
        <>
        <form onSubmit={handleCredentialSubmit}>
            <div className="group w-full">
                <input
                    type="email"
                    name='email'
                    placeholder="Email or Username"
                    className="w-full border px-4 py-2 rounded-md outline-none 
                        transition-colors
                         duration-2000 group-hover:ring-1 group-hover:ring-blue-500
                         bg-black text-white "
                />
            </div>

            <div className="group w-full">
                <input
                name='password'
                    type="password"
                    placeholder="Password"
                    className="w-full mt-4 border px-4 py-2 rounded-md outline-none 
                        transition-colors duration-2000 group-hover:ring-1
                         group-hover:ring-blue-500
                        bg-black text-white "
                />
            </div>

            <button type='submit' className="w-full bg-blue-500 text-white py-2 
                mt-4 rounded-lg hover:bg-blue-600">
                Sign in
            </button>
        </form>
         <p className='p-3 m-5 w-[350px] text-center'>
         {message}
     </p>
     </>

    )
}

export default Form;
