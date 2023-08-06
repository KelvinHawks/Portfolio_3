import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
    if(props.href){
        return(
            <a className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`}>
                {props.children}
            </a>
        )
    }
    if(props.to){
  return (
    <Link to={props.to} exact={props.exact} className={`button button--${props.size || 'default'} ${props.inverse && 'button-inverse'} ${props.danger && 'button--danger'}`}></Link>
  )
}
}

export default Button