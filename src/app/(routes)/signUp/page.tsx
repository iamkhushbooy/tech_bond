import React from 'react'
import { auth, signIn } from '@/auth'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { redirect } from 'next/navigation'
import Form from './Form'

const page = async () => {
    const session = await auth()
    if (!session) {
        redirect('/signUp')
    }

    return (
        <div className="flex justify-center items-center h-screen
         bg-black text-white">
            <div className="p-8 w-96">
                <div className='w-90 flex items-center justify-center gap-3 mb-5'>
                    <Image src='/bond.png' 
                    alt='bonding' 
                    width={30} 
                    height={30} />
                    <h1 className="font-bold text-[30px] bg-gradient-to-r
                     from-pink-500 to-purple-700 text-transparent bg-clip-text">
                        techbond
                    </h1>
                </div>
                <h2 className="text-2xl font-bold text-center mb-10">Sign Up</h2>

                {/* Google Sign In Form */}
                <form action={async () => { 'use server'; await signIn("google") }}>
                    <button
                        className="flex items-center justify-center w-full border py-2 
                        rounded-md mt-4 hover:bg-slate-700 
                        bg-black text-white ">
                        <p className='w-[80%]'>Continue with Google</p>
                        <FcGoogle className='w-[20%]' size={25} />
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                
                {/* credential form */}
                <Form/>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account? <a href="/signIn" 
                    className="text-blue-600  underline">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default page
