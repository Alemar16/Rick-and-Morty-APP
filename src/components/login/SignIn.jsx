import { useState } from "react";
import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const navigate = useNavigate();

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

  const handleSignInClick = () => {
    setShowInputs(true);
  };

  const handleGoBack = () => {
    setShowInputs(false);
  };

  return (
    <div className="mt-5">
      <h1>You have an account?</h1>
      {!showInputs ? (
        <button className="btn btn-secondary" onClick={handleSignInClick}>
          Sign In
        </button>
      ) : (
        <>
          <div className="d-flex align-items-center">
            <h2 className="me-2">Sign In</h2>
            <i onClick={handleGoBack} className="bi bi-reply-fill"></i>
          </div>
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
        </>
      )}
    </div>
  );
};

export default SignIn;
