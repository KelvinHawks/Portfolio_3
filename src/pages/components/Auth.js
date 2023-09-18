import React from 'react'
import Input from '../../shared/UIelements/Input'
import Button from '../../shared/formElements/Button'

function Auth() {
  return (
    <form>
        <Input
            id='name'
            element='input'
            label='Name'
            type='password'
        />
        <Input
            id='password'
            element='input'
            label='Password'
            type='password'
        />
        <Button inverse>SUBMIT</Button>
    </form>
  )
}

export default Auth