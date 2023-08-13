import React from 'react'
import Input from '../../shared/formElements/Input'
import './NewProject.css'
function NewProject() {
  return (
    <form className='place-form'>
        <Input element='input' id='title' label='Title' type='text' placeholder='Title'/>
        <Input id='description' label='Description' type='text'/>
    </form>
  )
}

export default NewProject