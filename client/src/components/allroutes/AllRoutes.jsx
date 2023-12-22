import React from 'react';
import { Route, Routes } from 'react-router-dom'

import HomePage from '../../pages/homeapge/HomePage';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SignUp from '../../pages/signup/SignUp';

const AllRoutes = () => {
  return (
      
          <>
              <Navbar/>
              <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignUp />} />
             
                  
              </Routes>
        <Footer/>
          
      </>
  )
}

export default AllRoutes