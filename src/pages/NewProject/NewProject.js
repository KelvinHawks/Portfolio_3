import React, { useCallback, useReducer } from 'react'
import Input from '../../shared/formElements/Input'
import './NewProject.css'
import Button from '../../shared/formElements/Button'

const formReducer = (state, action)=>{
  switch(action.type){
    case 'INPUT_CHANGE':
      let formIsValid = true
      for(const inputId in action.inputId){
        if(inputId === action.inputId){
          formIsValid = formIsValid && action.isValid
        }else{
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
        return{
          ...state,
          inputs:{
            ...state.inputs,
            [action.inputId]:{value:action.value, isValid:action.isValid}
          },
          isValid:formIsValid
        } 
      }
      default:
        return state
  }
}
function NewProject() {
  const[formState, dispatch] = useReducer(formReducer,{
    inputs:{
    title:{
      value:'',
      isValid:false
    },
    description:{
      value:'',
      isValid:false
    }
  },
    isValid:false
  })
  
  const inputHandler = useCallback((id,value,isValid)=>{
    dispatch({type:'INPUT_CHANGE',
    value:value,
    isValid:isValid,
    inputId:id
  })
  },[dispatch])
  const placeSubmitHandler = (e)=>{
    e.preventDefault()
    console.log(formState.inputs);
  }
  return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input 
          id='title' 
          element='input' 
          label='Title' 
          type='text' 
          placeholder='Title'
          onInput={inputHandler}
        />
        <Input 
          id='description' 
          label='Description'
          onInput={inputHandler} 
        />
        <Input 
          id='address' 
          element='input'  
          label='Address' 
          type='text' 
          placeholder='Address'
          onInput={inputHandler}
        />
        <Button inverse>ADD PLACE</Button>
    </form>
  )
}

export default NewProject