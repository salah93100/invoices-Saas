import { ReactNode } from "react"

export type PropsButtonWithIcon ={
    buttonText:string,
    buttonTheme:string,
    Icon:React.FC,
    onClick?:any
}


export const ButtonWithIcon = ({buttonText,Icon,onClick,buttonTheme}:PropsButtonWithIcon) => {
  return (
    <button 
    className={buttonTheme==='Primary'?`btn-blue bg-blue-500
     text-white px-4 py-2 rounded-sm 
      hover:text-blue-600 hover:bg-white 
      flex items-center gap-1 hover:border hover:border-blue-500`: `border border-blue-500
      text-blue-500 px-4 py-2 rounded-sm 
       hover:text-white hover:bg-blue-500
       flex items-center gap-1 hover:border hover:border-blue-500`} 
       onClick={onClick}>
{<Icon />
}
      <span>{buttonText}</span></button>
  )
}
