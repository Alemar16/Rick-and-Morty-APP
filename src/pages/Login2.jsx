import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import facebookIcon from "../assets/socialIcons/facebook_icon.svg";
import googleIcon from "../assets/socialIcons/google_icon.svg";
import githubIcon from "../assets/socialIcons/github_icon.svg";
import { UserAuth } from "../context/AuthContext";

const Login2 = () => {
  //para autentizar con Google
  const { user, googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      console.log("Usuario a iniciado en su cuenta en Google");
    } catch (error) {
      console.error("Error al iniciar sesión en Google", error);
    }
  };
  //para autentificar con Facebook
  const {facebookSignIn} = UserAuth();
  const handleFacebookSignIn = async (e) => {
    e.preventDefault(); 
    try {
      await facebookSignIn();
      console.log("Usuario a iniciado en su cuenta en Facebook");
    } catch (error) {
      console.error("Error al iniciar sesión en Facebook", error);
    }
  };
  //para autentificar con Github
  const { githubSignIn } = UserAuth();
  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      console.log("Usuario a iniciado en su cuenta en Github");
    } catch (error) {
      console.error("Error al iniciar sesión en Github", error);
    }
  }

  //para iniciar sesion con email y password
  const { signInWithEmail, signUpWithEmail } = UserAuth();
  //estado para almacenar datos del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  /* const [error, setError] = useState(""); */

  //funcion para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //funcion para manejar el inicio de seccion con email y password
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      await signInWithEmail(email, password);
      /* console.log("Informacion del usuario", user); */
      console.log("Usuario a iniciado en su cuenta");
      // Redirige al usuario a la página de inicio después del inicio de sesión exitoso
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      /*  setError("Error al iniciar sesión. Verifica tus credenciales."); */
    }
  };
  // Función para manejar el registro con email y contraseña
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { email, password, name } = formData;
      await signUpWithEmail(email, password, name);
      /*   console.log("información del usuario registrado",user) */
      console.log("Usuario a creado su cuenta");
      // Redirige al usuario a la página de inicio después del registro exitoso
      navigate("/home");
    } catch (error) {
      console.error("Error al registrar usuario:");
    }
  };

  useEffect(() => {
    if (user != null) {
      /* console.log("usuario autenticado", user); */
      navigate("/home");
    }
  }, [user, navigate]);
  //=============================================
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
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };
  const validatePasswords = () => {
    if (password === repeatPassword) {
      // Las contraseñas coinciden, realizar el registro
      alert("Success registration");
      return true;
      // Aquí puedes agregar la lógica para enviar los datos del formulario o realizar otras acciones necesarias
    } else {
      // Las contraseñas no coinciden, mostrar un mensaje de error
      setErrorMessage("Passwords do not match. Please try again.");
      return false;
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
      <ul
        className="nav nav-pills nav-justified mb-3 mt-3 "
        id="ex1"
        role="tablist"
      >
        {/* Boton de Login */}
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
        {/*Boton de Register */}
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
                onClick={handleFacebookSignIn}
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  style={{ width: "35px" }}
                />
              </button>
              {/* Google */}
              <button
                className="btn btn-dark btn-floating mx-2"
                title="Google"
                onClick={handleGoogleSignIn}
              >
                <img src={googleIcon} alt="Google" style={{ width: "35px" }} />
              </button>
              {/* Github */}
              <button className="btn btn-dark btn-floating mx-2" title="Github" onClick={handleGithubSignIn}>
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
                name="email" // Nombre del campo
                value={formData.email} // Valor del campo desde el estado
                onChange={handleInputChange} // Función para manejar cambios
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
                name="password" // Nombre del campo
                value={formData.password} // Valor del campo desde el estado
                onChange={handleInputChange} // Función para manejar cambios
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
                onClick={handleSignIn}
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
              <p>Ready to get started? Sign up now..!</p>
            </div>

            {/* identification Name input and Username input */}
            {/* name input */}
            <div className="input-group flex-nowrap mb-4">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fa-solid fa-user-large"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Nameame"
                aria-describedby="addon-wrapping"
                name="name" // Nombre del campo
                value={formData.name} // Valor del campo desde el estado
                onChange={handleInputChange} // Función para manejar cambios
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
                aria-label="Email"
                aria-describedby="addon-wrapping"
                name="email" // Nombre del campo
                value={formData.email} // Valor del campo desde el estado
                onChange={handleInputChange} // Función para manejar cambios
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
            {errorMessage && <p>{errorMessage}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ margin: "0 auto" }}
                onClick={(e) => {
                  if (!isChecked) {
                    alert("Debe aceptar los términos y condiciones");
                    return;
                  }
                  e.preventDefault();
                  if (validatePasswords()) {
                    // Llama a la primera función para validar si es true o false
                    handleSignUp(e); // Llama a la segunda función para validar el registro
                  }
                }}
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
