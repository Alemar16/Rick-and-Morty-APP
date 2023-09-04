// import React, { useContext, useState, useEffect, createContext } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithRedirect,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../components/firebase/firebase.js";

// const AuthContext = createContext();
// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider(); //Crear un nuevo proveedor de autenticación de Google
//     signInWithRedirect(auth, provider); //Redirigir al usuario a la página de autenticación de Google
//   };
//   const logout = () => {
//     signOut(auth);
//   };
//   //se usa el useEffect para que se ejecute cada vez que se renderiza el componente
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []); // en este caso solo se ejecuta una vez

//   return (
//     <AuthContext.Provider value={{ user, googleSignIn, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// //Retorna el contexto
// export const UserAuth = () => {
//   return useContext(AuthContext);
// };





import React, { useContext, useState, useEffect, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../components/firebase/firebase.js";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
const googleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserSessionPersistence);
    /* signInWithRedirect */ signInWithPopup(auth, provider);
  } catch (error) {
    // Manejar el error
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
    <AuthContext.Provider value={{ user, googleSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//Retorna el contexto
export const UserAuth = () => {
  return useContext(AuthContext);
};