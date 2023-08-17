import React from 'react'
import './Sidedrawer.css'
import ReactDOM  from 'react-dom'
function Sidedrawer(props) {
    const content = <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook')) 
}
export default Sidedrawer