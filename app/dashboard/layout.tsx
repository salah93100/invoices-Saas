'use client'
import {useSession,signOut} from 'next-auth/react'
import { SideBar } from "@/components/sidebar/SideBar"
import { TopBar } from "@/components/topbar/TopBar"
export default function DashboardLayout({children}:{children: React.ReactNode}) {
   const session=useSession()
    return (
      <section>
        <div className="flex w-full text-[#42526E] h-full">
        <div className='flex-4 bg-[#F8F9FB] border border-r-[#E5E9F2] h-screen  w-64 fixed'>
        <SideBar/>

        </div>
        <div className='flex-1 sticky ml-64 items-center '>
            <TopBar/>
           {children}
           </div>
        </div>
          
      </section>
    )
  }