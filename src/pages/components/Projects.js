import React from 'react'
import ProjectItem from './ProjectItem'
import Card from '../../shared/UIelements/Card'
import './Projects.css'

function Projects(props) {
    if(props.projects.length === 0){
        return <div className='card-items__center'><Card>
            <h1>No project found. Do you want to insert a project?</h1>
            <button>Insert Project</button>
        </Card>
        </div>
    }
  return (
    <ul className='main-container__full'>
        {
            props.projects.map((project)=>{
                return <ProjectItem
                id={project.id}
                name={project.title}
                image={project.image}
                languages={project.languages}
                />
            })
        }
    </ul>
  )
}

export default Projects