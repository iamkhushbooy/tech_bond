'use client'
import React from 'react'
import { useState } from 'react'
import {credentialSignIn} from './action'
const Form = () => {
    const [msg, setMsg] = useState('')

    const handleSubmit = async (formData: FormData) => {
        // console.log("Form submitted");
        const response = await credentialSignIn(formData);
        // console.log("Response Message:", response.msg);
        setMsg(response.msg)
    }
    return (
        <>
            <form action={handleSubmit}>
                <div className="w-full flex gap-x-4">
                    <div className="group w-full border rounded-md transition-colors 
                    duration-200 hover:ring-1 hover:ring-blue-500">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="w-full px-4 py-2 outline-none border-none
                            bg-black text-white "
                            required
                        />
                    </div>
                    <div className="group w-full border rounded-md transition-colors 
                    duration-200 hover:ring-1 hover:ring-blue-500">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="w-full px-4 py-2 outline-none border-none
                             bg-black text-white"
                            required
                        />
                    </div>
                </div>

                <div className="group w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email or Username"
                        className="w-full mt-4 border px-4 py-2 rounded-md outline-none 
                        transition-colors duration-200 group-hover:ring-1
                         group-hover:ring-blue-500 bg-black text-white"
                        required
                    />
                </div>

                <div className="group w-full">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full mt-4 border px-4 py-2 rounded-md outline-none 
                        transition-colors duration-200 group-hover:ring-1
                         group-hover:ring-blue-500 bg-black text-white"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white 
                py-2 mt-4 rounded-lg hover:bg-blue-600">
                    Join Techbond
                </button>

                {msg && (
                <p className="mt-2 text-center text-red-400">
                    {msg === 'sucess'
                        ? 'You are registered. please check your email and verify. '
                        : 'User is already registered with this email. Please login or use another email!'}
                </p>
            )}
            </form>
        </>
    )
}

export default Form
