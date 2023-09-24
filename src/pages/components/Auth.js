import React, { useState } from 'react'
import Input from '../../shared/UIelements/Input'
import Button from '../../shared/formElements/Button'
import Card from '../../shared/UIelements/Card'
//import { useForm } from '../../shared/hooks/form-hook'
import './Auth.css' 
function Auth() {
  const[formInputs, setFormInputs] = useState({
    username:'',
    email:'',
    password:''
  })
  const[isLoginMode, setIsLoginMode] = useState(true)

  const changeModeHandler = ()=>{
    setIsLoginMode(prevmode => !prevmode)
  }

  const inputHandler = (e)=>{
      const{name,value} = e.target
      setFormInputs({
        ...formInputs,
        [name]:value
      })
  }
  const placeSubmitHandler = (e)=>{
    e.preventDefault()
    console.log(formInputs);
  }

  return (
    <Card className='auth'>
      {isLoginMode ? <h1>Login</h1> : <h1>Register</h1>}
      <form onSubmit={placeSubmitHandler}>
        {!isLoginMode &&  
           <Input
           id='username'
           name="username"
           element='input'
           label='Username'
           validator={true}
           type='text'
           onChange={inputHandler}
       />
        }
          <Input
              id='email'
              name="email"
              element='input'
              label='Email'
              validator={true}
              type='text'
              onChange={inputHandler}
          />
          <Input
              id='password'
              name="password"
              element='input'
              label='Password'
              validator={true}
              type='password'
              onChange={inputHandler}
          />
          <Button inverse >SUBMIT</Button>
      </form>
      <Button onClick={changeModeHandler}>{isLoginMode ? 'SWITCH TO REGISTER' : 'SWITCH TO LOGIN'}</Button>
    </Card>
  )
}

export default Auth