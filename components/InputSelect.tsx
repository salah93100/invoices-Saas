import { PropsWithChildren } from "react"


type PropsSelect={
    options:{ label: string; value: number|string}[]
    onChangeSelect:any,
    label?:string,
    name:string,
    value:string,
}

export const InputSelect = ({options,onChangeSelect,label,name,value}:PropsSelect) => {
  return (
    <div className="flex flex-col ">
    <label className="block mb-1 text-xl font-medium "
    htmlFor={name}>{label}</label>
 <select 
 name={name} 
 id={name} 
 onChange={onChangeSelect} 
 value={value}
 className="border w-full py-3 rounded focus:ring-blue-500 focus:border-blue-500 px-3"
 >
     {options?(
     options.map((option)=>{
             return (  <option
         key={option.value}
         value={option.value}
         >
          {option.label} 
         </option>)
     })):("")}
    
 </select>
 
    </div>
  )
}
