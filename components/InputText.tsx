type PropsInput ={
    label?:string,
    name:string,
    handleChange:any,
    value:string,
    placeHolder:string
}


export const InputText = ({label,name,handleChange,value,placeHolder}:PropsInput) => {
  return (
   
    <div className="flex flex-col ">
    <label 
    htmlFor={name}
    className="block mb-1 text-xl font-medium ">{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      className="border py-1 rounded focus:ring-blue-500 focus:border-blue-500 px-1 fl"
      onChange={handleChange}
      placeholder={placeHolder}
             /> 
   </div>
 
 
  )
}
