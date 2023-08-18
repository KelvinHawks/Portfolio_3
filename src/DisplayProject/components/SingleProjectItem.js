import React from 'react'
import Card from '../../shared/UIelements/Card'
import Button from '../../shared/formElements/Button'
import './SingleProjectItem.css'
function SingleProjectItem(props) {
  return (
    <li className='project-item'>
      <Card>
        <img src={props.image}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className='place-items__buttons'>
          <Button href='/' inverse>VIEW IN WEB</Button>
          <Button to='' inverse>VIEW CODE</Button>
          <Button to={`/editProject/${props.id}`} inverse>EDIT</Button>
          <Button to='/delete' danger >DELETE</Button>
        </div>
      </Card>
    </li>
  )
}

export default SingleProjectItem