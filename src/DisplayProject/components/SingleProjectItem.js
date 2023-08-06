import React from 'react'
import Card from '../../shared/UIelements/Card'
import Button from '../../shared/formElements/Button'
import './SingleProjectItem.css'
function SingleProjectItem(props) {
  return (
    <li className='project-item'>
      <Card>
        <h1>{props.image}</h1>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Button href inverse>VIEW IN WEB</Button>
        <Button Link inverse>VIEW CODE</Button>
      </Card>
    </li>
  )
}

export default SingleProjectItem