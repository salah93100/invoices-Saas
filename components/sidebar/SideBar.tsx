import { UserProfile } from "./UserProfile"
import { BiReceipt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import Link from "next/link";




export const SideBar = () => {
  return (
    <nav className='w-64 py-4 px-2 '>
      <UserProfile srcPath={""}/>
      <div className="border-y border-y-[#E5E9F2] py-6">
      <ul className='flex flex-col gap-2 m-0 p-0 '>
      <Link href={'/dashboard/bills'} className='flex hover:bg-[#E5E9F2] rounded p-2 items-center gap-1 cursor-pointer'>
      <BiReceipt size="25px"/> Facture
      </Link>
      <Link href={'/dashboard/clients'} className='flex hover:bg-[#E5E9F2] rounded p-2 items-center gap-1 cursor-pointer'>
     <BsFillPersonFill size="25px"/>Clients
      </Link>

      <li className='flex hover:bg-[#E5E9F2] rounded p-2 items-center gap-1 cursor-pointer '><AiFillSetting size="25px"/>Paramètres</li>

      </ul>
      </div>
    </nav>
  )
}
