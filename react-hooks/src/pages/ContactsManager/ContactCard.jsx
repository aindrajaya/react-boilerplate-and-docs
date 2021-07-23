import React from 'react'
import user from './images/user.png'
import { Link } from 'react-router-dom'

export default function ContactCard(props) {
  const {name, email, id} = props.contact
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user"/>
      <div className="content">
        <Link
          to={{pathname:`contact/${id}`, state:{contact:props.contact}}}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          className="trash alternate icon"
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link
          to={{pathname:`edit/${id}`, state:{contact:props.contact}}}
        >
          <i className="edit alternate icon"></i>
        </Link>
      </div>
    </div>
  )
}
