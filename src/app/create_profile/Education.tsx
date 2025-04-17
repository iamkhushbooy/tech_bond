
import React, { useState } from 'react';
import Image from 'next/image';
export type educationType = {
  college: string,
  startYear: string,
  endYear: string,
  degree: string,
  stream: string,
  scoreType: string,
  score: string
}
type educationPropsType = {
  college: string,
  startYear: string,
  endYear: string,
  degree: string,
  stream: string,
  scoreType: string,
  score: string
  education:educationType[]
  setCollege: (value:string)=>void
  setStartYear: (value:string)=>void
  setEndYear: (value:string)=>void
  setDegree: (value:string)=>void
  setStream: (value:string)=>void
  setScoreType: (value:string)=>void
  setScore: (value:string)=>void
  setEducation:(value:educationType[])=>void
}
const Additem = ({college,setCollege,startYear,setStartYear,endYear,
  setEndYear,degree,setDegree,stream,setStream,scoreType,setScoreType,score,setScore ,education,setEducation}:educationPropsType) => {
    const [isopen, setIsopen] = useState(false);
  const handleSaveButton = () => {
    const newEducation: educationType = {
      college,
      startYear,
      endYear,
      degree,
      stream,
      scoreType,
      score,
    };
    setEducation([...education, newEducation]);
    setCollege('');
    setStartYear('');
    setEndYear('');
    setDegree('');
    setStream('');
    setScoreType('Percentage');
    setScore('');
    setIsopen(false);
  };

  const handleDeleteButton = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div>
      {education.length > 0 && (
        <div className='border-1 border-gray-800 gap-2 mt-2'>
          {education.map((item, index) => (
            <div
              key={index}
              className='flex justify-between w-[90%] ml-[5%] m-2 border-b border-gray-800'
            >
              <div className='w-full p-2 flex flex-col'>
                <h1 className='text-[20px] font-bold'>{item.college}</h1>
                <p>{item.degree} in {item.stream || 'N/A'} ({item.startYear} - {item.endYear})</p>
                <p>{item.scoreType}: {item.score}</p>
              </div>
              <button
                onClick={() => handleDeleteButton(index)}>
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



      <button onClick={() => setIsopen(true)}
        className='w-[200px] h-[35px] text-left text-blue-500 
      md:w-[250px]'>
        +add Graduation details
      </button>


      {isopen && (
        <div className='mt-18 fixed inset-0 backdrop-blur-xs flex justify-center'>
          <div className='bg-black w-[90%] h-[200px] p-6 rounded-md relative 
             md:w-[50%] md:min-h-[800px]'>
            <button onClick={() => setIsopen(false)}
              className='absolute top-2 right-3 text-xl'>✖</button>
            <h1 className='text-center mb-4 text-lg font-semibold text-[15px] text-blue-400
           md:text-[20px]'>
              Graduation details/ Post graduation details
            </h1>
            <div>
              <label className=" text-sm font-medium">College</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g. CSJM University Kanpur"
                className="w-full mt-1 border  border-gray-800 rounded 
                px-3 py-3 focus:outline-none text-[14px] text-gray-400" />
            </div>

            <div className="flex space-x-4 mt-4 h-[80px]
               md:mt-8">
              <div className="w-1/2">
                <label className="block text-sm font-medium ">Start year</label>
                <select
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  className="w-full mt-1 border border-gray-800  
                    focus:outline-none rounded px-3 py-3  text-[14px] text-gray-400">
                  <option className='bg-gray-950'>Choose year</option>
                  {Array.from({ length: 20 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option className='bg-gray-950'
                      key={year}
                      value={year}>
                      {year}
                    </option>;
                  })}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium ">End year</label>
                <select
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="w-full mt-1 border border-gray-800 
                  text-[14px] text-gray-400 rounded px-3 py-3 focus:outline-none">
                  <option className='bg-gray-950'>Choose year</option>
                  {Array.from({ length: 20 }, (_, i) => {
                    const year = new Date().getFullYear() + 1 + i;
                    return <option className='bg-gray-950'
                      key={year}
                      value={year}>
                      {year}
                    </option>
                  })}
                </select>
              </div>
            </div>

            <div className='mt-4 h-[80px] 
                 md:mt-8'>
              <label className="block text-sm font-medium">
                Degree
              </label>
              <input
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                type="text" placeholder="e.g. B.Tech"
                className="w-full mt-1 border border-gray-800 
                  outline-none rounded px-3 py-3" />
            </div>

            <div className='mt-4 h-[80px]
                 md:mt-8'>
              <label className="block text-sm font-medium ">
                Stream (Optional)
              </label>
              <input
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                type="text" placeholder="e.g. Mechanical"
                className="w-full mt-1 border border-gray-800 
                  outline-none rounded px-3 py-3" />
            </div>

            <div className="flex items-center space-x-4 h-[80px] mt-4
            md:mt-8">
              <div className="w-1/2">
                <label className="block text-sm font-medium">
                  Performance Score
                </label>
                <select
                  value={scoreType}
                  onChange={(e) => setScoreType(e.target.value)}
                  className="w-full mt-1 border rounded px-3 py-3
                  border-gray-900 outline-none">
                  <option className='bg-gray-950'>Percentage</option>
                  <option className='bg-gray-950'>CGPA</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-transparent">-</label>
                <input type="number"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder="Out of 100"
                  className="w-full mt-1 border border-gray-900 outline-none rounded px-3 py-3" />
              </div>
            </div>
            <div className="text-right mt-2">
              <button
                onClick={handleSaveButton}
                type="button"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Additem;
