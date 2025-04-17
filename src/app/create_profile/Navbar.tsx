import React from 'react'
import { auth, signOut } from '@/auth'
const Navbar = async () => {
  const session = await auth()
  return (
    <div className='w-full h-[70px] bg-black text-white flex items-center justify-between px-4'>
      <div className='text-left'>
        <h1 className="font-bold text-[20px] bg-gradient-to-r from-pink-500
                     to-purple-700 text-transparent bg-clip-text">
          tech-bond
        </h1>
      </div>
      <div className='text-right'>
       <button 
          onClick={async () => { 'use server'; await signOut(); }}
          className=" text-white px-4 py-2 rounded border-2
           border-gray-900">
          Sign Out
        </button>
      </div>
    </div>

  )
}

export default Navbar