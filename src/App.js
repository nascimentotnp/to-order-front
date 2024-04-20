
import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ScroolButton from './components/scroolButton/ScroolButton'
import Banner from './components/banner/Banner'
import Formulary from './components/form/Form'


const  App = () => {
    return (
        <>
          <ScroolButton/> 
          <div className='_navbar'>
            <Navbar />
          </div>

          <div className='_body'>
           <Banner/>
           <Formulary/>
          </div>
          
          <div className='_footer'>
            <Footer />
          </div>

        </>
    )
  }

export default App