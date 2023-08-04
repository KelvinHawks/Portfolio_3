import React from 'react'
import Projects from '../components/Projects'

function RenderProjects(props) {
    const projects = [{
        id:'u1',
        title:"Nisha website",
        image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
        languages:"Html Css",
    },
    {
        id:'u2',
        title:"Social App",
        image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
        languages:"Javascript React",
    }]
  return (
    <div className='renderProjects__container'>
        <Projects projects={projects}/>
    </div>
  )
}

export default RenderProjects