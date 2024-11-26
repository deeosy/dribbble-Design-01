import { useState } from 'react'
import './App.css'
import { Nav } from './Components/Nav'
import { CarouselDefault } from './Components/Carousel'
import { AboutPizza } from './Components/AboutPizza'
import { PizzaTypes } from './Components/PizzaTypes'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <Nav companyName="PIZZAMANIA" home="Home" about="About Pizza" types="Pizza Types" />
      <CarouselDefault image1="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg" image2="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" image3="https://img.cuisineaz.com/1280x720/2018/02/28/i136025-pizza-legere.jpeg" />
      <AboutPizza />
      <PizzaTypes name="Cheese Pizza" image="url" des />
      <Footer year="2024" companyName="PIZZAMANIA" />
    </>
  )
}

export default App
