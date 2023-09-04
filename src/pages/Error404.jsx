import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h1>Error404</h1>
      <button
        className='btn btn-primary'
        onClick={() => navigate(-1)}
      >Return
      </button>
    </div>
  )
}

export default Error404