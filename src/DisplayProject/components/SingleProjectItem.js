import React, { useState } from 'react'
import Card from '../../shared/UIelements/Card'
import Modal from '../../shared/UIelements/Modal'
import Button from '../../shared/formElements/Button'
import Map from '../../shared/UIelements/Map'
import './SingleProjectItem.css'
function SingleProjectItem(props) {
  const[showModal, setShowModal] = useState(false)

  const openModalOverlay = ()=>{
    setShowModal(true)
  }
  const closeModalOverlay = ()=>{
    setShowModal(false)
  }
  
  return (
    <React.Fragment>
      <Modal show={showModal} header={props.title} onCancel={closeModalOverlay}>
          <h1>The modal popup</h1>
          <div>
            <Map/>
          </div>
      </Modal>
      <li className='project-item'>
        <Card>
          <img src={props.image}/>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className='place-items__buttons'>
            <Button href='/' inverse>VIEW IN WEB</Button>
            <Button inverse onClick={openModalOverlay}>VIEW MODAL</Button>
            <Button to={`/editProject/${props.id}`} inverse>EDIT</Button>
            <Button to='/delete' danger >DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default SingleProjectItem