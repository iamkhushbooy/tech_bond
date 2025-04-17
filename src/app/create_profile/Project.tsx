'use client'
import React, { useState } from 'react';
import Image from 'next/image';
export type SingleProject = {
  title: string;
  description: string;
  link: string;
};
type projectType = {
  title: string;
  description: string;
  link: string;
  projects: SingleProject[];
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setLink: (value: string) => void;
  setProjects: (value: SingleProject[]) => void;
};

const Addproject = ({ title, setTitle, description,
  setDescription, link, setLink, projects, setProjects }: projectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddProject = () => {
    setProjects([...projects, { title, description, link }]);
    setTitle('')
    setDescription('')
    setLink('')
  }
  const handleDeleteButton = (id: Number) => {
    let del = projects.filter((item, index) => index !== id)
    setProjects(del)
  }
  return (
    <div>
      {projects.length > 0 &&
        <div className='border-1 border-gray-800 gap-2 mt-2'>
          {projects.map((project, index) => (
            <div key={index} className='flex justify-between
            w-[90%] ml-[5%] m-2 border-b border-gray-800 '>
              <div className='w-full p-2 flex flex-col'>
                <h1 className='text-[20px] font-bold '>{project.title}</h1>
                <p>{project.description}</p>
                <a href={project.link} className='text-blue-400 underline'>
                  {project.link}
                </a>
                </div>
                <button onClick={() => handleDeleteButton(index)}>
                  <Image
                    src='/delete.png'
                    alt='' width={30}
                    height={30}>
                  </Image>
                </button>
            </div>
          ))}

        </div>
      }
      <button onClick={() => setIsOpen(true)} className='w-[200px] 
      h-[35px] text-left text-blue-500 md:w-[250px]'>
        +add project
      </button>
      {isOpen && (
        <div className='mt-18 fixed inset-0 backdrop-blur-xs flex justify-center'>
          <div className='bg-black w-[90%] h-[200px] p-6 rounded-md relative 
          md:w-[400px]'>
            <button onClick={() => setIsOpen(false)} className='absolute top-2 
            right-3 text-xl'>✖</button>
            <h1 className='text-center mb-4 text-lg font-semibold'>Project</h1>
            <input
              type="text"
              placeholder='title'
              className='border outline-none border-blue-400 w-full px-3 py-2
               mb-3 rounded'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder='description'
              className='border outline-none border-blue-400 w-full px-3 py-2 
              mb-3 rounded'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder='https://khushbooyadav.vercel.app/'
              className='border outline-none border-blue-400 w-full px-3 py-2 
              mb-3 rounded'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button onClick={handleAddProject} className='bg-blue-500 text-white
             w-full py-2 rounded'>
              Add project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addproject;
