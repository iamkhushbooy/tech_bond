import React from 'react'
import { auth } from '@/auth';
import Header from '@/components/Header';
const page =async () => {
  const session=await auth();
  // console.log(session);
  
  return (
    <div className='w-full h-screen'>
     <Header/>
    </div>
  )
}

export default page
