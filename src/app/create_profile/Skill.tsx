'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
type AddSkillProps = {
  skillInput: string
  skills: string[]
  setSkillInput: (value: string) => void
  setSkills: (value: string[]) => void
}
const AddSkill = ({skillInput,setSkillInput,skills,setSkills}:AddSkillProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  }
  const handleDeleteButton=(id:number)=>{
    let deleteSkill=skills.filter((item,index)=>index!==id)
    setSkills(deleteSkill)
  }
  return (
    <div>
      {skills.length > 0 && (
        <div className=' border-1 border-gray-800  p-4 flex 
          flex-col gap-2 mt-2'>
          {skills.map((skill, index) => (
            <div key={index} className='p-2 flex justify-between'>
             <p>{skill}</p>
              <button onClick={()=>handleDeleteButton(index)}>
                <Image 
                src='/delete.png' 
                alt='' width={30} 
                height={30}>
                </Image>
              </button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setIsOpen(true)} className='w-[200px] 
          h-[35px] text-left text-blue-500
          md:w-[250px]'>
        +add skill
      </button>

      {isOpen && (
        <div className=' mt-18 fixed inset-0 
          backdrop-blur-xs flex justify-center'>
          <div className='bg-black w-[90%] h-[200px]  p-6 rounded-md 
            relative 
            md:w-[400px]'>
            <button onClick={() => setIsOpen(false)} className='absolute top-2 right-3 
              text-xl'>✖</button>
            <h1 className='text-center mb-4 text-lg font-semibold underline '>Skills</h1>
            <input
              type="text" 
              placeholder='e.g. HTML'
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className='border outline-none border-blue-400 w-full px-3 py-2 mb-3 
                rounded'
            />
            <button onClick={handleAddSkill} className='bg-blue-500 text-white 
                w-full py-2 rounded'>
              Add Skill
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddSkill