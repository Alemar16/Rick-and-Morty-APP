import { useContext, useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile, 
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../components/firebase/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Cambia el valor inicial a null

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials)
    } catch (error) {
      console.log("Error al iniciar sesión en Google", error);
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmail = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Actualiza el perfil del usuario con el nombre
      await updateProfile(userCredential.user, { displayName: name });

      setUser(userCredential.user); // Establece el usuario en el contexto
    } catch (error) {
      console.log(error);
    }
  };

  const facebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials)
    } catch (error) {
      console.log("Error al iniciar sesión en Facebook", error);
    }
  }

  const logout = () => {
    signOut(auth);
    setUser(null); // Asegúrate de limpiar el usuario al cerrar sesión
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Información del usuario actualizada:", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn,facebookSignIn, logout, signInWithEmail, signUpWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
