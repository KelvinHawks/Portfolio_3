import React, { useState } from 'react'
import Input from '../../shared/UIelements/Input'
import Button from '../../shared/formElements/Button'
import Card from '../../shared/UIelements/Card'
import { useForm } from '../../shared/hooks/form-hook'
import './Auth.css' 
function Auth() {
  const[formState, inputHandler] = useForm({
    username:{
      value:''
    },
    email:{
      value:''
    },
    password:{
      value:''
    }
  })
  const[isLoginMode, setIsLoginMode] = useState(true)

  const changeModeHandler = ()=>{
    setIsLoginMode(prevmode => !prevmode)
  }

  const placeSubmitHandler = (e)=>{
      e.preventDefault()
      console.log(formState.inputs);
  }

  return (
    <Card className='auth'>
      {isLoginMode ? <h1>Login</h1> : <h1>Register</h1>}
      <form onSubmit={placeSubmitHandler}>
        {!isLoginMode &&  
           <Input
           id='username'
           element='input'
           label='Username'
           type='text'
           onInput={inputHandler}
       />
        }
          <Input
              id='email'
              element='input'
              label='Email'
              type='text'
              onInput={inputHandler}
          />
          <Input
              id='password'
              element='input'
              label='Password'
              type='password'
              onInput={inputHandler}
          />
          <Button inverse >SUBMIT</Button>
      </form>
      <Button onClick={changeModeHandler}>{isLoginMode ? 'SWITCH TO REGISTER' : 'SWITCH TO LOGIN'}</Button>
    </Card>
  )
}

export default Auth