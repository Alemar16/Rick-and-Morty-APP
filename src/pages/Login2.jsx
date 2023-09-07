import { useState } from "react";
import facebookIcon from "../assets/socialIcons/facebook_icon.svg";
import googleIcon from "../assets/socialIcons/google_icon.svg";
import githubIcon from "../assets/socialIcons/github_icon.svg";

const Login2 = () => {
  //para intercambiar entre los componentes login y register
  const [activeTab, setActiveTab] = useState("login");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //para validar checkbox de terminos y condiciones
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert("Debe aceptar los términos y condiciones");
      return;
    }
  };

  //para validar checbox de Remember me
  const [rememberMe, setRememberMe] = useState(false);
  const handleCheckboxChangeRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  //para logica de password y password repeat
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  }
  const validatePasswords = () => {
    if (password === repeatPassword) {
      // Las contraseñas coinciden, realizar el registro
      alert("Success registration");
      // Aquí puedes agregar la lógica para enviar los datos del formulario o realizar otras acciones necesarias
    } else {
      // Las contraseñas no coinciden, mostrar un mensaje de error
      setErrorMessage(
        "Passwords do not match. Please try again."
      );
    }
  };


  return (
    <div
      className="container mt-5 mb-4 bg-dark rounded border border-secondary"
      style={{
        maxWidth: "360px",
        minWidth: "230px",
        margin: "auto",
        paddingTop: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-3 mt-3 " id="ex1" role="tablist">
        {/* Login */}
        <li className="nav-item " role="presentation">
          <a
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected={activeTab === "login"}
          >
            Login
          </a>
        </li>
        {/* Register */}
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "register" ? "active" : ""}`}
            onClick={() => handleTabClick("register")}
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected={activeTab === "register"}
          >
            Register
          </a>
        </li>
      </ul>
      {/*  Pills navs*/}

      {/* Pills content */}
      <div className="tab-content">
        {/* Login */}
        <div
          className={`tab-pane fade ${
            activeTab === "login" ? "show active" : ""
          }`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              {/* Facebook */}
              <button
                className="btn btn-dark btn-floating mx-2"
                title="Facebook"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  style={{ width: "35px" }}
                />
              </button>
              {/* Google */}
              <button className="btn btn-dark btn-floating mx-2" title="Google">
                <img src={googleIcon} alt="Google" style={{ width: "35px" }} />
              </button>
              {/* Github */}
              <button className="btn btn-dark btn-floating mx-2" title="Github">
                <img src={githubIcon} alt="Github" style={{ width: "35px" }} />
              </button>
            </div>

            <p className="text-center">or:</p>

            {/* Email input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            {/* Password input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
              />
            </div>

            {/*  2 column grid layout*/}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    checked={rememberMe}
                    onChange={handleCheckboxChangeRememberMe}
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    Remember me
                  </label>
                </div>
              </div>

              {/* Simple link */}
              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-block "
                style={{ margin: "0 auto" }}
              >
                Sign in
              </button>
            </div>
            <div className="text-right y ml-auto mb-1" title="Exit">
              <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
            </div>
          </form>
        </div>

        {/* Register */}
        <div
          className={`tab-pane fade ${
            activeTab === "register" ? "show active " : ""
          }`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
          /* style={{maxHeight: "400px"}} */
        >
          <form onSubmit={handleFormSubmit}>
            <div className="text-center mb-3 mt-3">
              <p>
                "Ready to get started? Sign up now!"
              </p>
            </div>

            {/* identification Name input and Username input */}
            {/* Email input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-user-large"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            {/* Email input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />




            </div>
            {/* Password input */}
            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {/* Repeat Password input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
            </div>



            


            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked={isChecked}
                aria-describedby="registerCheckHelpText"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            {/* Submit button */}
            {errorMessage && 
              <p>{errorMessage}</p>
            }
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-block "
                style={{ margin: "0 auto" }}
                onClick={validatePasswords}
              >
                Sign in
              </button>
            </div>
            {/* Exit button */}
            <div className="text-right y ml-auto mb-1" title="Exit">
              <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
            </div>
          </form>
        </div>
      </div>
      {/* Pills content */}
    </div>
  );
};

export default Login2;



//  <div className="row mb-4">
//    <div className="col">
   
//      <div className="input-group flex-nowrap mb-1 me-1">
//        <span className="input-group-text" id="addon-wrapping">
//          <i class="fa-solid fa-user-large"></i>
//        </span>
//        <input
//          type="text"
//          className="form-control"
//          placeholder="Name"
//          aria-label="Username"
//          aria-describedby="addon-wrapping"
//        />
//      </div>
//    </div>
//    <div className="col">
   
//      <div className="input-group flex-nowrap mb-1">
//        <span className="input-group-text" id="addon-wrapping">
//          <i class="fa-solid fa-user-ninja"></i>
//        </span>
//        <input
//          type="text"
//          className="form-control"
//          placeholder="Username"
//          aria-label="Username"
//          aria-describedby="addon-wrapping"
//        />
//      </div>
//    </div>
//  </div>;

//========================================================================
// import { useState } from "react";
// import facebookIcon from "../../assets/socialIcons/facebook_icon.svg";
// import googleIcon from "../../assets/socialIcons/google_icon.svg";
// import githubIcon from "../../assets/socialIcons/github_icon.svg";

// const Login2 = () => {
//   //para intercambiar entre los componentes login y register
//   const [activeTab, setActiveTab] = useState("login");
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   //para validar checkbox de terminos y condiciones
//   const [isChecked, setIsChecked] = useState(false);
//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (!isChecked) {
//       alert("Debe aceptar los términos y condiciones");
//       return;
//     }
//   };

//   //para validar checbox de remember me
//   const [rememberMe, setRememberMe] = useState(false);
//   const handleCheckboxChangeRememberMe = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   return (
//     <div
//       className="container mt-5 mb-4 bg-dark rounded"
//       style={{
//         maxWidth: "360px",
//         minWidth: "230px",
//         margin: "auto",
//         paddingTop: "10px",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
//         border: "1px solid rgba(255, 255, 255, 0.1)",
//       }}
//     >
//       {/* Pills navs */}
//       <ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
//         {/* Login */}
//         <li className="nav-item" role="presentation">
//           <a
//             className={`nav-link ${activeTab === "login" ? "active" : ""}`}
//             onClick={() => handleTabClick("login")}
//             id="tab-login"
//             data-mdb-toggle="pill"
//             href="#pills-login"
//             role="tab"
//             aria-controls="pills-login"
//             aria-selected={activeTab === "login"}
//           >
//             Login
//           </a>
//         </li>
//         {/* Register */}
//         <li className="nav-item" role="presentation">
//           <a
//             className={`nav-link ${activeTab === "register" ? "active" : ""}`}
//             onClick={() => handleTabClick("register")}
//             id="tab-register"
//             data-mdb-toggle="pill"
//             href="#pills-register"
//             role="tab"
//             aria-controls="pills-register"
//             aria-selected={activeTab === "register"}
//           >
//             Register
//           </a>
//         </li>
//       </ul>
//       {/*  Pills navs*/}

//       {/* Pills content */}
//       <div className="tab-content">
//         {/* Login */}
//         <div
//           className={`tab-pane fade ${
//             activeTab === "login" ? "show active" : ""
//           }`}
//           id="pills-login"
//           role="tabpanel"
//           aria-labelledby="tab-login"
//         >
//           <form>
//             <div className="text-center mb-3">
//               <p>Sign in with:</p>

//               {/* Facebook */}
//               <button
//                 className="btn btn-dark btn-floating mx-2"
//                 title="Facebook"
//               >
//                 <img
//                   src={facebookIcon}
//                   alt="Facebook"
//                   style={{ width: "35px" }}
//                 />
//               </button>
//               {/* Google */}
//               <button className="btn btn-dark btn-floating mx-2" title="Google">
//                 <img src={googleIcon} alt="Google" style={{ width: "35px" }} />
//               </button>
//               {/* Github */}
//               <button className="btn btn-dark btn-floating mx-2" title="Github">
//                 <img src={githubIcon} alt="Github" style={{ width: "35px" }} />
//               </button>
//             </div>

//             <p className="text-center">or:</p>

//             {/* Email input */}
//             <div className="input-group flex-nowrap mb-4">
//               <span className="input-group-text" id="addon-wrapping">
//                 <i className="fa-solid fa-envelope"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Email"
//                 aria-label="Username"
//                 aria-describedby="addon-wrapping"
//               />
//             </div>

//             {/* Password input */}
//             <div className="input-group flex-nowrap mb-4">
//               <span className="input-group-text" id="addon-wrapping">
//                 <i className="fa-solid fa-key"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 aria-label="Password"
//                 aria-describedby="addon-wrapping"
//               />
//             </div>

//             {/*  2 column grid layout*/}
//             <div className="row mb-4">
//               <div className="col-md-6 d-flex justify-content-center">
//                 {/* Checkbox */}
//                 <div className="form-check mb-3 mb-md-0">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="loginCheck"
//                     checked={rememberMe}
//                     onChange={handleCheckboxChangeRememberMe}
//                   />
//                   <label className="form-check-label" htmlFor="loginCheck">
//                     Remember me
//                   </label>
//                 </div>
//               </div>

//               {/* Simple link */}
//               <div className="col-md-6 d-flex justify-content-center">
//                 <a href="#!">Forgot password?</a>
//               </div>
//             </div>

//             {/* Submit button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block mb-3"
//                 style={{ margin: "0 auto" }}
//               >
//                 Sign in
//               </button>
//             </div>

//             {/* Register buttons */}
//             {/* <div className="text-center">
//               <p>
//                 Not a member? <a href="#!">Register</a>
//               </p>
//             </div> */}
//           </form>
//         </div>

//         {/* Register */}
//         <div
//           className={`tab-pane fade ${
//             activeTab === "register" ? "show active " : ""
//           }`}
//           id="pills-register"
//           role="tabpanel"
//           aria-labelledby="tab-register"
//           /* style={{maxHeight: "400px"}} */
//         >
//           <form onSubmit={handleFormSubmit}>
//             <div className="text-center mb-3">
//               <p>Sign in with:</p>

//               {/* Facebook */}
//               <button
//                 className="btn btn-dark btn-floating mx-2"
//                 title="Facebook"
//               >
//                 <img
//                   src={facebookIcon}
//                   alt="Facebook"
//                   style={{ width: "35px" }}
//                 />
//               </button>
//               {/* Google */}
//               <button className="btn btn-dark btn-floating mx-2" title="Google">
//                 <img src={googleIcon} alt="Google" style={{ width: "35px" }} />
//               </button>
//               {/* Github */}
//               <button className="btn btn-dark btn-floating mx-2" title="Github">
//                 <img src={githubIcon} alt="Github" style={{ width: "35px" }} />
//               </button>
//             </div>

//             <p className="text-center">or:</p>

            // {/* Name input */}
            // {/* <div className="form-outline mb-4">
            //   <input type="text" id="registerName" className="form-control" />
            //   <label className="form-label" htmlFor="registerName">
            //     Name
            //   </label>
            // </div> */}

            // {/* Username input */}
            // {/* <div className="form-outline mb-4">
            //   <input
            //     type="text"
            //     id="registerUsername"
            //     className="form-control"
            //   />
            //   <label className="form-label" htmlFor="registerUsername">
            //     Username
            //   </label>
            // </div> */}

//             {/* Email input */}
//             <div className="input-group flex-nowrap mb-4">
//               <span className="input-group-text" id="addon-wrapping">
//                 <i className="fa-solid fa-envelope"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Email"
//                 aria-label="Username"
//                 aria-describedby="addon-wrapping"
//               />
//             </div>

//             {/* Password input */}
//             <div className="input-group flex-nowrap mb-4">
//               <span className="input-group-text" id="addon-wrapping">
//                 <i className="fa-solid fa-key"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 aria-label="Password"
//                 aria-describedby="addon-wrapping"
//               />
//             </div>

//             {/* Repeat Password input */}
//             {/* <div className="form-outline mb-4">
//               <input
//                 type="password"
//                 id="registerRepeatPassword"
//                 className="form-control"
//               />
//               <label className="form-label" htmlFor="registerRepeatPassword">
//                 Repeat password
//               </label>
//             </div> */}

//             {/* Checkbox */}
//             <div className="form-check d-flex justify-content-center mb-4">
//               <input
//                 className="form-check-input me-2"
//                 type="checkbox"
//                 value=""
//                 id="registerCheck"
//                 checked={isChecked}
//                 aria-describedby="registerCheckHelpText"
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label" htmlFor="registerCheck">
//                 I have read and agree to the terms
//               </label>
//             </div>

//             {/* Submit button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block mb-3"
//                 style={{ margin: "0 auto" }}
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Pills content */}
//     </div>
//   );
// };

// export default Login2;
