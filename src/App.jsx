import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About'
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer'


const App = () => {
  return (
    <div className='m-0 p-0 box-border bg-[#181818] text-white overflow-hidden'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
