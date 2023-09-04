import React, { useState } from "react";
import Login from "../pages/Login";
import image from "../assets/landindImagen.png";
import { FaSpinner } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleShowLogin = () => {
    setShowLogin(true);
    setIsLoading(true);
  };

  // const handleOutsideClick = () => {
  //   setShowLogin(false);
  //   setIsLoading(false);
  // };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
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
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarColor02"
          >
            <button className="btn btn-transparent d-flex justify-content-center">
              Instructions
            </button>
            <button
              onClick={handleShowLogin}
              className="btn btn-secondary d-flex justify-content-center"
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="spin-animation"  /> : "Login"}
            </button>
          </div>
        </div>
      </nav>
      {showLogin && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
          }}
          // onClick={handleOutsideClick}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: isMobile ? "90vw" : "60vw",
              height: "50vh",
              marginTop: isMobile ? "10vh" : "19vh",
              marginLeft: isMobile ? "5vw" : "-5vw",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

// import React, { useState } from "react";
// import Login from "./Login";
// import image from "../assets/landindImagen.png";
// import { FaSpinner } from "react-icons/fa";
// import { useMediaQuery } from "react-responsive";

// const LandingPage = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSignIn, setIsSignIn] = useState(false);
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//   const handleShowLogin = () => {
//     setShowLogin(true);
//     setIsLoading(true);
//   };

//   const handleOutsideClick = () => {
//     setShowLogin(false);
//     setIsLoading(false);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//       }}
//     >
//       <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="./">
//             RICK AND MORTY
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarColor02"
//             aria-controls="navbarColor02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse flex-grow-0"
//             id="navbarColor02"
//           >
//             <button className="btn btn-transparent d-flex justify-content-center">
//               Instructions
//             </button>
//             <button
//               onClick={handleShowLogin}
//               className="btn btn-secondary d-flex justify-content-center"
//               disabled={isLoading}
//             >
//               {isLoading ? <FaSpinner className="spin-animation" /> : "Login"}
//             </button>
//           </div>
//         </div>
//       </nav>
//       {showLogin && (
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             zIndex: 999,
//           }}
//           onClick={handleOutsideClick}
//         >
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{
//               width: isMobile ? "90vw" : "60vw",
//               height: "50vh",
//               marginTop: isMobile ? "10vh" : "19vh",
//               marginLeft: isMobile ? "5vw" : "-5vw",
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             <Login onClose={handleOutsideClick} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;