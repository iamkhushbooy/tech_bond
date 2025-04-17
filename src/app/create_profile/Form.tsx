'use client'
import React, { useState } from 'react';
import Project from './Project';
import ReusableRow from './ReusualRow';
import Education from './Education';
import Portfolio from './Portfolio';
import AddSkill from './Skill';
import { SingleProject } from './Project';
import { educationType } from './Education';
import axios from 'axios';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
  });

  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [projects, setProjects] = useState<SingleProject[]>([]);
  const [inputlink, setInputlink] = useState('');
  const [college, setCollege] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [degree, setDegree] = useState('');
  const [stream, setStream] = useState('');
  const [scoreType, setScoreType] = useState('Percentage');
  const [score, setScore] = useState('');
  const [education, setEducation] = useState<educationType[]>([]);
  const [links, setLinks] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const saveData = async () => {
    let name=formData.name;
    // let {name}=formData;
    let {age}=formData;
    let {mobile}=formData;
    const res=await axios.post('/api/create_profile',{
      name,age,mobile, skills, projects, education, links
    })
    console.log(res.data);
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[90%] border border-gray-900 min-h-[90vh] p-4 flex flex-col mb-20 md:w-[60%]'>
        {[
          { label: 'NAME :', name: 'name', type: 'text' },
          { label: 'AGE:', name: 'age', type: 'number' },
          { label: 'MOBILE NO :', name: 'mobile', type: 'text' },
        ].map((field, index) => (
          <div key={index} className='w-[90%] ml-[5%] mr-[5%] h-[100px] border-b-1 border-gray-800 md:w-[80%] md:h-[70px] md:ml-[10%] md:mr-[10%]'>
            <div className='flex flex-col gap-2 h-[100px] justify-center md:items-center md:flex-row md:h-[70px]'>
              <label
                htmlFor={field.name}
                className='text-white w-[100px] text-[13px] md:w-[250px] md:text-[15px]'
              >
                {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                placeholder="Type here"
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-[280px] border-1 border-gray-700 h-[35px] px-2 rounded-md outline-none transition-colors duration-200 group-hover:ring-1 text-white md:w-[450px]"
              />
            </div>
          </div>
        ))}

        <ReusableRow label="SKILLS :">
          <AddSkill
            skillInput={skillInput}
            setSkillInput={setSkillInput}
            skills={skills}
            setSkills={setSkills}
          />
        </ReusableRow>


        <ReusableRow label="PROJECT :">
          <Project
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            link={link}
            setLink={setLink}
            projects={projects}
            setProjects={setProjects}
          />
        </ReusableRow>

        <ReusableRow label="EDUCATION :">
          <Education
            college={college}
            setCollege={setCollege}
            startYear={startYear}
            setStartYear={setStartYear}
            endYear={endYear}
            setEndYear={setEndYear}
            degree={degree}
            setDegree={setDegree}
            stream={stream}
            setStream={setStream}
            scoreType={scoreType}
            setScoreType={setScoreType}
            score={score}
            setScore={setScore}
            education={education}
            setEducation={setEducation}
          />
        </ReusableRow>

        <ReusableRow label="PORTFOLIO :">
          <Portfolio
            inputlink={inputlink}
            setInputlink={setInputlink}
            links={links}
            setLinks={setLinks}
          />
        </ReusableRow>

        <button onClick={saveData} className="w-[20%] ml-[70%] mt-8 bg-blue-900 text-white px-3 py-2 rounded hover:bg-blue-950">
          Save
        </button>


      </div>
    </div>
  );
};

export default Form;
