import { useState } from "react";
import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Crea una cuenta con Firebase usando el correo electrónico y la contraseña
      await createUserWithEmailAndPassword(auth, email, password);
      // Si la creación de la cuenta fue exitosa, puedes realizar alguna acción adicional o redirigir al usuario a una página específica
    } catch (error) {
      // Maneja los errores de creación de cuenta, si los hay
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
