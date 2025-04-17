import React from 'react'
import Navbar from './Navbar'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Form from '@/app/create_profile/Form'
import Image from 'next/image'
const page = async () => {
  const session = await auth()
  if (!session?.user) {
    redirect('/signIn')
  }

  return (
    <div>
      <Navbar />
     <div className='w-full h-[180px] flex justify-center  
     items-center gap-1 flex-col
     md:gap-8 md:flex-row md:h-[100px] mb-8'>
     <div>
        <Image 
          src="https://lh3.googleusercontent.com/a/ACg8ocKVZw-_rH89l_92Pfa1N2bjIWTGHteChXNg9GN5UORQLWIzLws=s96-c" 
          alt="User image"
          width={80}
          height={80}
          className='rounded-full'
        />
      </div>
        <div className='text-center'>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        </div>
     </div>
      <Form/>
    </div>
  )
}

export default page