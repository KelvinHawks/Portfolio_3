import React from 'react'
import Project from '../components/Project'
import { useParams } from 'react-router-dom'

  const details = [{
    id:1,
    image:'Nisha.jpg',
    title:'Nisha',
    desc:'Well built website',
    creator:'u1'
  },
  {
    id:2,
    image:'SCCF.jpg',
    title:'SCCF',
    desc:'Well built sccf website',
    creator: 'u2'
  }]
  function SingleProject() {
    const params = useParams().userId
    const loadedPlace = details.filter(detail => detail.creator === params)
    return <Project details={loadedPlace}/>
}
export default SingleProject