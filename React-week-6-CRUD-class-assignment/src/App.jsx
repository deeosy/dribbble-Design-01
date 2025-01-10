import { useState } from 'react'
import './App.css'
import {v4 as uuid } from 'uuid'
import Contacts from './Components/Contacts'
import ContactForm from './Components/ContactForm'

function App() {
  const [contacts, setContacts] =useState([  ])  

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact)=> contact.id !== id))
  }  

  const hadndleEditContact= (id, editedContactInfo) => {
    setContacts(contacts.map((contact)=>{
      if(contact.id === id){
        return editedContactInfo;
      } else{
        return contact;
      }
    }))
  }
 
  return (
    <>
    <div className="">
      <ContactForm addContact={addNewContact} />
      <h2 className='text-2xl text-center mb-3' >Contacts List</h2>
      <div className="">
        {contacts.map((contactInfo) => {
          return(
            <Contacts contactInfo={contactInfo} key={contactInfo.id} handleDeleteContact={handleDeleteContact} hadndleEditContact={hadndleEditContact} />
          )
        })}
      </div>

    </div>

    </>
  )
}

export default App
