import { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../components/firebase/firebase.js";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log("Error al iniciar sesión en Google", error);
      // Manejar el error
    }
  };
  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const signUpWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    signOut(auth);
  };
  //se usa el useEffect para que se ejecute cada vez que se renderiza el componente
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []); // en este caso solo se ejecuta una vez

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logout, signInWithEmail, signUpWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Retorna el contexto
export const UserAuth = () => {
  return useContext(AuthContext);
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
