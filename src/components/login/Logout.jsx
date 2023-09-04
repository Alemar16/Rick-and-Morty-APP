import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const cerrarSesion = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h6 className="text-secondary col ">Welcome {user.displayName}</h6>
      <button className="btn btn-secondary col " onClick={cerrarSesion}>
        Logout
      </button>
    </div>
  );
};
export default Logout;

