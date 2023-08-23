import React, { useEffect, useReducer } from 'react'
import './Input.css'

const inputReducer = (state, action)=>{
  switch(action.type){
    case 'CHANGE':
      return{
        ...state,
        value:action.val,
        isValid:action.isValid
      }
      default:
        return state
  }
}
function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer,{
    value:'',
    isValid:false
  })
  const {id, onInput} = props
  const {value, isValid} = inputState

  useEffect(()=>{
    onInput(id, value, isValid)
  },[id,value,isValid,onInput])
  const changeHandler = (e)=>{
    dispatch({
      type:'CHANGE',
      val:e.target.value, 
      isValid:false
    })
  }
    const element = props.element === 'input'? 
        <input 
          id={props.id} 
          placeholder={props.placeholder} 
          type={props.type} 
          onChange={changeHandler}
          value={inputState.value}
        /> :
         <textarea 
          id={props.id} 
          rows={props.rows || 3} 
          type={props.type} 
          onChange={changeHandler}
        />
  return (
    <div className='form-control'>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
    </div>
  )
}

export default Input