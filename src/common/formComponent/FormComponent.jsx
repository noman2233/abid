import React from 'react'
import "./formComponent.css"
const FormComponent = ({type,placeholder}) => {
  return (
    <div className='form_input_compo'>
        <input type={type} placeholder={placeholder} className='form_component'/>
    </div>
  )
}

export default FormComponent
