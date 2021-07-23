import React from 'react'

//props tugasnya consume data dari parent
const InputForm = ({type, id, placeholder, htmlFor, konten}) => {
  return (
    //JSX
    <div className="form-floating">
      <input type={type} className="form-control" id={id} placeholder={placeholder}/>
      <label htmlFor={htmlFor}>{konten}</label>
    </div>
  )
}

export default InputForm
