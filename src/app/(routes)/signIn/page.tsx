
import React from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import Form from './Form'
import { signIn } from '@/auth'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
const page =async () => {
    const session = await auth()
    if (!session) {
        redirect('/signIn')
    }
    return (
        <div className="flex justify-center items-center h-screen
         bg-black text-white">
            <div className="p-8 w-96">
                <div className='w-90 flex items-center justify-center gap-3 mb-5'>
                    <Image src='/bond.png' alt='bonding' width={30} height={30} />
                    <h1 className="font-bold text-[30px] bg-gradient-to-r
                     from-pink-500 to-purple-700 text-transparent bg-clip-text">
                        techbond
                    </h1>
                </div>
                <h2 className="text-2xl font-bold text-center 
                 bg-black text-white mb-10">Welcome back</h2>


                <form action={async () => { 'use server'; await signIn("google") }}>
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full border py-2 
                        rounded-md mt-4 hover:bg-slate-700 ">
                    <p className='w-[80%] '>Continue with Google</p>
                    <FcGoogle className='w-[20%]' size={25} />
                </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>


                {/* Email/Password Login */}
                <Form />


                <p className="text-center mt-4 text-gray-600">
                    <span>Don't have an account?</span>
                    <Link className='text-blue-500 mx-2 underline'
                        href={'/signUp'}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default page;
