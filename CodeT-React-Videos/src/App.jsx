import { useState } from 'react'
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

// this the code below helps us slipt our overall code into components and render them in the app components as a whole. so we importing the components from their externally save files in the component folder
class App extends Component {
  render() {
    return (
      <div className="">
        <h1>This is the class Component</h1>
        <Navbar />
        <Sidebar />
        <Body />
      </div>
    )
  }
}



// import './App.css'

// // below is how the functional component is written
// function App() {


//   return (
//     <>
      
//     </>
//   )
// }


// // Below is how the class component is been used but we will be using more of the functional component going forward...
// class App extends Component {
//   render() {
//     return (
//       <div className="">
//         <h1>This is the class Component</h1>
//         <Navbar />
//         <Sidebar />
//         <Body />
//       </div>
//     )
//   }
// }

// class Navbar extends Component{
//   render(){
//     return (<h1>Navbar</h1>)
//   }
// }

// class Sidebar extends Component{
//   render(){
//     return <h1>Sidebar</h1>
//   }
// }

// class Body extends Component {
//   render(){
//     return <h1>Body</h1>
//   }
// }


export default App;
