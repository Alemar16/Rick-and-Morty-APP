import { useState } from "react";
import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const Navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Crea una cuenta con Firebase usando el correo electrónico y la contraseña
      await createUserWithEmailAndPassword(auth, email, password);
      // Si la creación de la cuenta fue exitosa, puedes realizar alguna acción adicional o redirigir al usuario a una página específica
      console.log("Usuario creado");
      // Redirigir al usuario a la ruta "/"
      Navigate("/home");
    } catch (error) {
      // Maneja los errores de creación de cuenta, si los hay
      console.log(error);
    }
  };
  const handleSignUpInClick = () => {
    setShowInputs(true);
  }

  const handleGoBack = () => {
    setShowInputs(false);
  }

  return (
   <div className="mt-5">
      <h1>Create an account</h1>
      {!showInputs ? (
        <button className="btn btn-secondary" onClick={handleSignUpInClick}>
          Sign Up
        </button>
      ) : (
        <>
          <div className="d-flex align-items-center">
            <h2 className="me-2">Sign Up</h2>
            <i onClick={handleGoBack} className="bi bi-reply-fill"></i>
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUp;
