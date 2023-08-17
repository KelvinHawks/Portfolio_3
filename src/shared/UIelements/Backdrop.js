import React from 'react'
import './Backdrop.css'
import ReactDOM from 'react-dom'
function Backdrop(props) {
    const backdrop = <div className='backdrop' onClick={props.onClick}></div>
  return ReactDOM.createPortal(backdrop, document.getElementById('backdrop-hook'))
}

export default Backdrop