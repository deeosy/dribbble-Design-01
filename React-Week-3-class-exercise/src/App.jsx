import { useState } from 'react'
import './App.css'
import { Greeting } from './components/Greeting'
import { HelloWorld } from './components/HelloWorld'
import { Hello } from './components/Hello'
import { Message } from './components/Message'
import { HelloAsClass } from './components/HelloAsClass'



function App() {

  return (
    <>
      <Greeting name="Kwesi" />
      <Greeting name="Kwame" />
      <Greeting name="Walter" />
      {/* How a component is written */}
      <HelloWorld />
      {/* How to call a prop (single prop) */}
      <Hello who="Earth"/> 
      <Hello who="Mars" />

      {/* How to call multiple props  */}
      <Message greet="Welcome" who="Aliens"  />

      {/* How to call props with a class function */}
      <HelloAsClass who="Earth" />

    </>
  )
}

export default App


// // values for props

// 1. String Literals : 
// <MyComponent prop="My String Value" />

// 2. Template literals with variables:
{/* <MyComponent prop={`My String Value ${myVariable}`} /> */}

// 3.  Number literals
//<MyComponent prop={42} />

// 4. Boolean literals:
{/* <MyComponent prop={false} /> */}

// 5. Plain object literals:
// <MyComponent prop={{ property: 'Value' }} />

// 6. Array literals:
{/* <MyComponent prop={['Item 1', 'Item 2']} /> */}

// 7. JSX:
{/* <MyComponent prop={<Message who="Joker" />} /> */}

// 8 . variables
// <MyComponent prop={myVariable} />
