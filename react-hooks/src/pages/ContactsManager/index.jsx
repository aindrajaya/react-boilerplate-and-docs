import React, {useEffect, useState} from 'react'
import {uuid} from 'uuidv4'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import api from './api' //penamaan data bebas -> intinya dia manggil fungsi dari file contacts

import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import AddContact from './AddContact'
import EditContact from './EditContact'

const ContactAppManager = () => {
  const [contacts, setContacts] = useState([])

  //retrive contacts
  const retrieveContacts = async() => {
    const res = await api.get("/contacts") //call api function untuk menjalankan axios
    // const dataAPI = await res.data
    // setContacts(dataAPI)
    return res.data
  }

  //add contact
  const addHandlerContact = async(contact) => {
    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  }

  //remove contact
  const removeHandlerContact = async(id) => {
    await api.delete(`/contacts/${id}`);
    const newContactListAfterDeleteWithSpecificID = contacts.filter((contact) => {
      return contact.id !== id //jika contact.id tidak sama dgn id yg disebut, maka dia akan tersimpan lagi
    })

    setContacts(newContactListAfterDeleteWithSpecificID)
  }

  const updateContactHandler = async(contact) =>  {
    const res = await api.put(`/contacst/${contact.id}`, contact)
    const {id, name, email} = res.data
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...res.data} : contact
      })
    )
  }

  useEffect(() => {
    const getAllContacts = async() => {
      const allAlcontacts = await retrieveContacts();
      //cek data contact untuk merender seluruh contact yg ada
      if(allAlcontacts) setContacts(allAlcontacts)
    }

    // retrieveContacts()
    getAllContacts()
  }, []) //componentDidUpdate


  useEffect(() => {
  }, [contacts])

  console.log(contacts)

  return (
    <div className="ui container">
      <Router>
        <Switch>
          {/* Halaman COntact List  */}
          <Route 
            path="/"
            exact
            render={(props) => (
              <ContactList 
                {...props}
                contacts={contacts}
                getContactRemoveID={removeHandlerContact}
              />
            )}
          />

           {/* Halaman Add COntact */}
           <Route 
              path="/add"
              render={(props) => (
                <AddContact 
                  {...props}
                 addContactHandler={addHandlerContact}
                />
              )}
           />

          {/* Halaman Detail Contact */}
          <Route 
            path="/contact/:id"
            component={ContactDetail}
          />
          {/* Halaman Edit COntact */}
          <Route 
              path="/edit"
              render={(props) => (
                <EditContact 
                  {...props}
                 updated={updateContactHandler}
                />
              )}
           />

        </Switch>
      </Router>
    </div>
  )
}

export default ContactAppManager