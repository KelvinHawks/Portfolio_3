import React from 'react'
import SingleProjectItem from './SingleProjectItem'
function Project(props) {
  return (
    <div>{
        props.details.map(detail=>{
            return <SingleProjectItem image={detail.image} title={detail.title} description={detail.desc} key={detail.id}/>
        }      
            )
    }</div>
  )
}

export default Project