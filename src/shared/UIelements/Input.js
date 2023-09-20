import React, { useEffect, useReducer } from 'react'

const inputReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                value:action.val
            }
            default:
                return state
    }
   
}
function Input(props) {
    const[inputState, dispatch] = useReducer(inputReducer, {
        value:props.initialValue || '',
    })

    const {id, onInput} = props
    const {value} = inputState

    useEffect(()=>{
        onInput(id, value)
    },[id, value, onInput])
    const changeHandler = (e)=>{
        dispatch({
            type:'CHANGE',
            val:e.target.value
        })
    }
    const element = props.element === 'input' ?
        <input 
            id={props.id}
            type={props.type}
            onChange={changeHandler}
            value={inputState.value} 
        /> :
         <textarea 
            id={props.id}
            type={props.type}
            onChange={changeHandler}
            value={inputState.value}
        />
  return (
    <div>      
        <label htmlFor={props.id}>{props.label}</label>
        {element}
    </div>
  )
}

export default Input