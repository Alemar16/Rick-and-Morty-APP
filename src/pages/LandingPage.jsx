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
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RICK AND MORTY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <form className="d-flex ms-auto">
              <button
                onClick={goLogingHandler}
                className="btn btn-secondary my-2 my-sm-0 "
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingPage