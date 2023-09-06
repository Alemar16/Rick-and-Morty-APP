import { Link } from "react-router-dom";
import Logout from "../login/Logout";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top" style={{ zIndex: "100"}} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="./home">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./favorites">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./synopsis">
                  Synopsis
                </a>
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
                  <Link
                    className="dropdown-item"
                    to="https://rickandmortyapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rick and Morty API
                  </Link>
                  <a className="dropdown-item" href="./henry_m2">
                    Henrry Module 2 Instructions
                  </a>
                  <a className="dropdown-item" href="./tecnologies">
                    Applied technologies
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="./about">
                    About
                  </a>
                </div>
              </li>
            </ul>
            <div>
            <ErrorBoundary>
              <Logout/>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
