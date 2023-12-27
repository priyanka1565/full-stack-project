import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignUp from '../../pages/login/signUp/signUp'
import Login from '../../pages/login/login'
const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<SignUp />} />
              <Route path='/login' element={<Login/> } />
          </Routes>
    </div>
  )
}

export default AllRoutes