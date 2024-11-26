import { useState } from 'react'
import './App.css'

import AboutPizza from "./components/AboutPizza";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizaCo from "./components/PizaCo";
import PizzaType from "./components/PizzaType";

function App() {

  return (
    <>
      <Navbar />
      <PizaCo />
      <AboutPizza />
      <PizzaType />
      <Footer />
    </>
  )
}

export default App
