import { ButtonWithIcon } from "./ButtonWithIcon"
import { GrAdd } from 'react-icons/gr';
import { AiOutlineUpload } from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import { PropsButtonWithIcon } from "./ButtonWithIcon";
import Link from "next/link";
import NextLink from 'next/link'
import { Url } from "next/dist/shared/lib/router/router";

type HeadBarPageProps ={
  tittle:string,
  buttonPrimary:PropsButtonWithIcon,
  buttonSecondary:PropsButtonWithIcon,
  href:string
}


export const HeadBarPage = ({tittle,buttonPrimary,buttonSecondary,href}:HeadBarPageProps) => {
  return (
    <div className="px-4 py-2 border-b border-b-[#E5E9F2] flex gap-2 justify-between">
            <div className="flex items-center">
            <p className="font-semibold">{tittle}</p>
            </div>
            
            <div className="flex gap-2">
        <ButtonWithIcon buttonText={buttonSecondary.buttonText} Icon={buttonSecondary.Icon} buttonTheme={buttonSecondary.buttonTheme} onClick={buttonSecondary.onClick} />

        <NextLink href={href}>
          
       <ButtonWithIcon buttonText={buttonPrimary.buttonText} Icon={buttonPrimary.Icon}  buttonTheme={buttonPrimary.buttonTheme} onClick={buttonPrimary.onClick}/>

        </NextLink>

        </div>
        </div>
  )
}
