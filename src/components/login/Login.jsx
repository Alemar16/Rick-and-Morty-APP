import { useState } from "react";
import { auth } from "../firebase/firebase.js"; // Importa el objeto de autenticación de Firebase
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con Firebase usando el correo electrónico y la contraseña
      await signInWithEmailAndPassword(auth,email, password);
      // Si el inicio de sesión fue exitoso, puedes realizar alguna acción adicional o redirigir al usuario a una página específica
    } catch (error) {
      // Maneja los errores de inicio de sesión, si los hay
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
