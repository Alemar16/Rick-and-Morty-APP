import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await signOut(auth);
    console.log("Usuario deslogueado");
    navigate("/");
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
