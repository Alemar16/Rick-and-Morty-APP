import React from 'react'
import Logout from '../components/login/Logout'
import Login from '../components/login/Login'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const goLogingHandler = () => {
    navigate('/login')
  }
  return (
    <div>
      <h1 className='text-center text-white mt-5'>
        RICK AND MORTY
      </h1>
      <div className="container mt-5 d-flex justify-content-center" >
        <button onClick={(goLogingHandler) } className="btn btn-secondary">Login</button>
      </div>
    </div>
  )
}

export default LandingPage