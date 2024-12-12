import { useState } from 'react'
import './App.css'
import {v4 as uuid } from 'uuid'
import Contacts from './Components/Contacts'
import ContactForm from './Components/ContactForm'

function App() {
  const [contacts, setContacts] =useState([
    // { id:uuid(), name:"Walter", phoneNumber: "+"+233244123456, location: "Spintex",},
    // { id:uuid(), name:"Jonny", phoneNumber: "+"+233244987654, location: "Tema",},
    // { id:uuid(), name:"Solomon", phoneNumber: "+"+233244654321, location: "Legon",},
  ])  

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  console.log(contacts);
  

  return (
    <>
    <div className="">
      <ContactForm addContact={addNewContact} />
      <h2 className='text-2xl text-center mb-3' >Contacts List</h2>
      <div className="">
      {contacts.map((contactInfo) => {
        return(
          <Contacts contactInfo={contactInfo} key={contactInfo.id} />
        )
      })}

      </div>

    </div>

    </>
  )
}

export default App
