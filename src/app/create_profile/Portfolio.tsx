'use client'
import React, { useState } from 'react'
import Image from 'next/image';
type portfolioType = {
    inputlink: string
    setInputlink: (value: string) => void
    links: string[]
    setLinks: (value: string[]) => void
}
const Portfolio = ({ inputlink, setInputlink, links, setLinks }: portfolioType) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleAddLink = () => {
        if (inputlink.trim() !== '') {
            setLinks([...links, inputlink.trim()]);
            setInputlink('')
        }
    }
    const handleDeleteButton = (id: number) => {
        let del = links.filter((item, index) => index !== id)
        setLinks(del)

    }
    return (
        <div>
            {links.map((item, index) => (
                <div key={index} className='p-2 flex justify-between items-center'>
                    <a
                        href={item}
                        className='text-blue-400 underline max-w-[80%] break-words'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item}
                    </a>
                    <button onClick={() => handleDeleteButton(index)}>
                        <Image
                            src='/delete.png'
                            alt='Delete'
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            ))}

            <button onClick={() => setIsOpen(true)} className='w-[200px] 
                    h-[35px] text-left text-blue-500
                    md:w-[250px]'>
                +add link
            </button>
            {isOpen && (
                <div className=' mt-18 fixed inset-0 
                    backdrop-blur-xs flex justify-center'>
                    <div className='bg-black w-[90%] h-[200px]  p-6 rounded-md 
                    relative 
                    md:w-[400px]'>
                        <button onClick={() => setIsOpen(false)} className='absolute top-2 right-3 
                            text-xl'>✖</button>
                        <h1 className='text-center mb-4 text-lg font-semibold underline '>Links</h1>
                        <input
                            type="text"
                            value={inputlink}
                            onChange={(e) => setInputlink(e.target.value)}
                            placeholder='https://khushbooyadav.vercel.app/'
                            className='border outline-none border-blue-400 w-full px-3 py-2 mb-3 
                            rounded'
                        />
                        <button onClick={handleAddLink} className='bg-blue-500 text-white 
                            w-full py-2 rounded'>
                            Add Link
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Portfolio
