import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'

export default function ContactList(props) {
  console.log(props.contacts)

  const deleteContact = (id) => {
   props.getContactRemoveID(id)
  }

  const renderedContactList = props.contacts.map((contact => {
    return(
      <ContactCard 
        contact={contact}
        clickHandler={deleteContact}
        key={contact.id}
      />
    )
  }))
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link
        to="/add"
      >
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list">{
       renderedContactList
        }
      </div>
      
    </div>  
  )
}
