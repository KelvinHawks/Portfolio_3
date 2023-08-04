import React from 'react'

function SingleProjectItem(props) {
  return (
    <div>
        <h1>{props.image}</h1>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default SingleProjectItem