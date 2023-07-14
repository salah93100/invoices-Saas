import Image from 'next/image'
import LogoProfile from '../../public/LawyerLogo.png'
import {useSession} from 'next-auth/react'
type Props ={
    srcPath:string

}

export const UserProfile =  ({srcPath}:Props) => {
  const session= useSession()
  return (
    <div className='w-64 px-4 pb-4 flex flex-col gap-4 mt-4'>
    <div className='reative h-36 flex justify-center items-center  rounded-full'>
    <Image 

      src={session?.data?.user?.image}  
      width={80}
      height={80}
      alt="Picture of your account"
      className='rounded-full'/>
      </div>

    <div className='text-center'>
        <p className='font-semibold uppercase'>ID: {session?.data?.user?.name}</p>
    </div>
    </div>
  )
}
