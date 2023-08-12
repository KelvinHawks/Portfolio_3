import React from 'react'
import Card from '../../shared/UIelements/Card'
import Avatar from '../../shared/UIelements/Avatar'
import './ProjectItem.css'
import { Link } from 'react-router-dom'
function ProjectItem(props) {
  return (
   <li className='project-item-main'>
    <Card className='card-item'>
      <Link to={`/${props.id}/project`}>
        <Avatar src={props.image} alt={props.title}></Avatar>
        <h2>{props.name}</h2>
        <p className='languages-sect'>{props.languages}</p>
        </Link>
    </Card>
   </li>
  )
}

export default ProjectItem