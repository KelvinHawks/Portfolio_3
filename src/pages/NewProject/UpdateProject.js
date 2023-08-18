import React from 'react'
import Input from '../../shared/formElements/Input'
import { useParams } from 'react-router-dom'

const details = [{
    id:'u1',
    image:'../images/nisha.png',
    title:'Nisha',
    desc:'Well built website',
    creator:'u1'
  },
  {
    id:'u2',
    image:'../images/sccf.png',
    title:'SCCF',
    desc:'Well built sccf website',
    creator: 'u2'
}]
function UpdateProject() {
   
    
      const projectId = useParams().ProjectId
      const update = details.find(detail => detail.id === projectId)
      if(!update){
        return <div>Could not find the project</div>
      }
  return <form>
            <Input
                element='input'
                type='text'
                label='Title'
                value={update.title}
            />
            <Input
                element='textarea'
                label='Description'
                value={update.desc}
            />
    </form>
    
    
  
}

export default UpdateProject