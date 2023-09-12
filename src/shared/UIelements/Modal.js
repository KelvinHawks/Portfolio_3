import React from 'react'
import ReactDOM  from 'react-dom'
import Backdrop from './Backdrop'
import './Modal.css'
const ModalOverlay = (props)=>{
    const content = (
        <div className='modal__hook'>
            <header>
                <h1>{props.header}</h1>
            </header>
            {props.children}
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

function Modal(props) {
  return (
    <div className='modal__content'>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <div>
            {props.show && <ModalOverlay {...props}/>}
        </div>
    </div>
  )
}

export default Modal