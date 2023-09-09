import React from 'react'
import ReactDOM  from 'react-dom'
import Backdrop from './Backdrop'
const ModalOverlay = (props)=>{
    const content = (
        <div>
            <header>
                <h1>{props.header}</h1>
            </header>
            
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

function Modal(props) {
  return (
    <div className='modal__content'>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <div>
            {props.show && <ModalOverlay/>}
        </div>
    </div>
  )
}

export default Modal