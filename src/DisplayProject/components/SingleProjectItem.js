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
        <div className='place-items__buttons'>
          <Button href inverse>VIEW IN WEB</Button>
          <Button to Link inverse>VIEW CODE</Button>
          <Button to danger>Delete</Button>
        </div>
        
      </Card>
    </li>
  )
}

export default SingleProjectItem