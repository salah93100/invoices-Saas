import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';


export const TopBar = () => {
  return (
    <div className='h-[50px] flex border-y border-y-[#E5E9F2]  top-0 m-0 px-4'>
        <div className='flex  justify-between mx-4 items-center h-full w-full'>
          <div className='flex items-center'>
          
          </div>
          <div className='flex items-center justify-between min-w-[94px]'>
          <div className='flex relative'>
            <span className='cursor-pointer'><IoMdNotificationsOutline  size={"25px"}/></span> 
          <span className="flex items-center justify-center  absolute bg-red-600 rounded-full h-[14px] w-[14px] -top-[4px] -right-[2px] text-white text-[10px] font-semibold">2</span>

          </div>
          <div className='flex border-l border-l-[#888888] pl-[20px]'>
            <span className='cursor-pointer'><CgProfile size={"25px"}/></span> 
            </div>
          </div>

        </div>
        
    </div>
  )
}
