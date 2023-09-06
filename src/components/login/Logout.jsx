import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const cerrarSesion = async () => {
    try {
      await logout();
      console.log("Usuaro desconectado");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(user);

  const firstName = user?.displayName?.split(" ")[0];
  //const displayName = user?.providerUserInfo[0]?.displayName;
  let userInfo = null;

  if (user.displayName) {
    // Si el usuario tiene un displayName (inicio de sesión con Google)
    userInfo = user.displayName;
  } else {
    // Si el usuario no tiene displayName (inicio de sesión con correo y contraseña)
    userInfo = user.email;
  }

  //console.log(user.displayName);

  return (
    <div className="container d-flex ">
      {user && (
        <div className="row">
          <div>
            <h6
              className="text-secondary small "
              style={{ marginBottom: "-5px" }}
            >
              Welcome,
            </h6>
            <h6
              className="text-secondary text-white small"
              style={{ marginTop: "5px" }}
            >
              {userInfo}
            </h6>
          </div>
          <div>{user.photoUrl && <img src={user.photoUrl} alt="User" />}</div>
        </div>
      )}

      <div>
        <button className="btn btn-secondary" onClick={cerrarSesion}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
