import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//para google
import { UserAuth } from "../context/AuthContext";
// para email
import { auth } from "../components/firebase/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = ({onClose}) => {
  //para google
  const { user, googleSignIn } = UserAuth();
  //para email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //para cambio de Sign In y Sign Up
  const [isSignIn, setIsSignIn] = useState(false);
  //para cerrar el componente por referencia
  const loginRef = useRef(null);

  const navigate = useNavigate();
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario iniciado");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      console.log("Usuario creado");

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const toogleMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="container py-5">
      
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">
                {isSignIn && (
                  <a
                    className="return-link"
                    onClick={() => setIsSignIn(false)}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </a>
                )}
                {isSignIn ? "Login" : "Sign Up"}
              </h2>
              {!isSignIn && (
                <div className="text-center mt-4">
                  <div className="social-icons d-flex justify-content-center gap-3">
                    <button
                      onClick={iniciarSesion}
                      className="btn btn-secondary"
                    >
                      <i className="fab fa-google fa-lg"></i>
                    </button>
                    <button
                      onClick={iniciarSesion}
                      className="btn btn-secondary"
                    >
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </button>
                    <button
                      onClick={iniciarSesion}
                      className="btn btn-secondary"
                    >
                      <i className="fab fa-github fa-lg"></i>
                    </button>
                  </div>
                  <p className="text-muted mb-2 mt-4">Or sign in with:</p>
                </div>
              )}

              {isSignIn && (
                <div className="text-center mt-4 mb-2">
                  <p className="text-muted">
                    Please enter your registration details!
                  </p>
                </div>
              )}

              <form onSubmit={isSignIn ? handleSignin : handleSignup}>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group text-center mt-4">
                  <button
                    className="btn btn-outline-dark btn-block"
                    type="submit"
                  >
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>

              <div className="text-center">
                {isSignIn ? (
                  <p className="text-muted mb-0">
                    Forgot password?{" "}
                    <a href="#" className="text-decoration-none">
                      Click here
                    </a>
                  </p>
                ) : (
                  <p className="mt-2 mb-0">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-decoration-none"
                      onClick={toogleMode}
                    >
                      Sign In
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Login;


// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
// import { auth } from "../components/firebase/firebase.js";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// const Login = ({ onClose }) => {
//   const { user, googleSignIn } = UserAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignIn, setIsSignIn] = useState(true);
//   const loginRef = useRef(null);
//   const navigate = useNavigate();

//   const iniciarSesion = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (user != null) {
//       navigate("/home");
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (loginRef.current && !loginRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [onClose]);

//   const handleSignin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Usuario iniciado");
//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       console.log("Usuario creado");
//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const toggleMode = () => {
//     setIsSignIn(!isSignIn);
//   };

//     return (
//       <div ref={loginRef}>
//         <div className="container py-5">
//           <div className="col-12 col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h2 className="text-center mb-4">
//                   {isSignIn && (
//                     <a
//                       className="return-link"
//                       onClick={() => setIsSignIn(false)}
//                       style={{
//                         cursor: "pointer",
//                         position: "absolute",
//                         top: "10px",
//                         left: "10px",
//                       }}
//                     >
//                       <i className="fas fa-arrow-left"></i>
//                     </a>
//                   )}
//                   {isSignIn ? "Login" : "Sign Up"}
//                 </h2>
//                 {!isSignIn && (
//                   <div className="text-center mt-4">
//                     <div className="social-icons d-flex justify-content-center gap-3">
//                       <button
//                         onClick={iniciarSesion}
//                         className="btn btn-secondary"
//                       >
//                         <i className="fab fa-google fa-lg"></i>
//                       </button>
//                       <button
//                         onClick={iniciarSesion}
//                         className="btn btn-secondary"
//                       >
//                         <i className="fab fa-facebook-f fa-lg"></i>
//                       </button>
//                       <button
//                         onClick={iniciarSesion}
//                         className="btn btn-secondary"
//                       >
//                         <i className="fab fa-github fa-lg"></i>
//                       </button>
//                     </div>
//                     <p className="text-muted mb-2 mt-4">Or sign in with:</p>
//                   </div>
//                 )}

//                 {isSignIn && (
//                   <div className="text-center mt-4 mb-2">
//                     <p className="text-muted">
//                       Please enter your registration details!
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={isSignIn ? handleSignin : handleSignup}>
//                   <div className="form-group">
//                     <label htmlFor="inputEmail">Email</label>
//                     <input
//                       type="email"
//                       id="inputEmail"
//                       className="form-control"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="inputPassword">Password</label>
//                     <input
//                       type="password"
//                       id="inputPassword"
//                       className="form-control"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group text-center mt-4">
//                     <button
//                       className="btn btn-outline-dark btn-block"
//                       type="submit"
//                     >
//                       {isSignIn ? "Sign In" : "Sign Up"}
//                     </button>
//                   </div>
//                 </form>

//                 <div className="text-center">
//                   {isSignIn ? (
//                     <p className="text-muted mb-0">
//                       Forgot password?{" "}
//                       <a href="#" className="text-decoration-none">
//                         Click here
//                       </a>
//                     </p>
//                   ) : (
//                     <p className="mt-2 mb-0">
//                       Already have an account?{" "}
//                       <a
//                         href="#"
//                         className="text-decoration-none"
//                         onClick={toogleMode}
//                       >
//                         Sign In
//                       </a>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }
// export default Login;