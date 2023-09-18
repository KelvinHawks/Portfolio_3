import React from 'react'
import Card from './Card'
function Input(props) {
    const element = props.element === 'input' ?
        <input 
            id={props.id}
            type={props.type} 
        /> :
         <textarea 
            id={props.id}
            type={props.type}
        />
  return (
    <div>
        <Card>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            
        </Card>
        
    </div>
  )
}

export default Input