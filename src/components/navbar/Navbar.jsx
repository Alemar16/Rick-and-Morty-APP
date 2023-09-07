import { Link } from "react-router-dom";
import Logout from "../login/Logout";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark fixed-top"
        style={{ zIndex: "100" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="logo" className="img-fluid rounded " style={{ width: "70px", height: "70px", marginRight: "10px", marginTop: "-10px",marginBottom: "-10px", padding: "0px", borderRadius: "50px" }}/>
          </Link>
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/synopsis">
                  Synopsis
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Project
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="https://rickandmortyapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rick and Morty API
                  </a>
                  <Link className="dropdown-item" to="/henry_m2">
                    Henrry Module 2 Instructions
                  </Link>
                  <Link className="dropdown-item" to="/technologies">
                    Applied technologies
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                </div>
              </li>
            </ul>
            <div>
              <ErrorBoundary>
                <Logout />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
