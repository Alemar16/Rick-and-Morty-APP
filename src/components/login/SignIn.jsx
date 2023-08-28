import { useState } from "react";
import { auth } from "../firebase/firebase.js"; // Importa el objeto de autenticación de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con Firebase usando el correo electrónico y la contraseña
      await signInWithEmailAndPassword(auth, email, password);
      // Si el inicio de sesión fue exitoso, puedes realizar alguna acción adicional o redirigir al usuario a una página específica
      console.log("Usuario iniciado");
      // Redirigir al usuario a la ruta "/"
      navigate("/home");
    } catch (error) {
      // Maneja los errores de inicio de sesión, si los hay
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
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
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
