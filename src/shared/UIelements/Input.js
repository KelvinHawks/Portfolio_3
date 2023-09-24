import React from 'react'



function Input(props) {

    const element = props.element === 'input' ?
        <input 
            id={props.id}
            type={props.type}
            onChange={props.onChange}
            name={props.name}
            
        /> :
         <textarea 
            id={props.id}
            type={props.type}
            onChange={props.onChange}
            name={props.name}
            
        />
  return (
    <div>      
        <label htmlFor={props.id}>{props.label}</label>
        {element}
    </div>
  )
}

export default Input