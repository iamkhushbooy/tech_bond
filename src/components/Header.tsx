import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className="flex justify-between items-center 
                p-4 border-b-1 border-gray-900">
            <div className="text-xl font-extrabold text-[20px] 
                bg-gradient-to-r from-purple-500 via-pink-500
                to-blue-500 text-transparent bg-clip-text
                md:text-[25px] ">
                TechBond
            </div>
            <div>
                <Link href={'/signIn'}>
                <button className={`mr-4 px-2 py-1 border border-gray-700
                    rounded transition-transform transform hover:scale-110
                    md:mr-8 md:px-4 md:py-2`}>
                    Sign In
                </button>
                </Link>
                <Link href={'/signUp'}>
                <button className=" px-2 py-1 border border-gray-700
                    rounded transition-transform transform hover:scale-110
                    md:mr-8 md:px-4 md:py-2">
                    Sign Up
                </button>
                </Link>
            </div>
        </div>
    )
}
export default Header
