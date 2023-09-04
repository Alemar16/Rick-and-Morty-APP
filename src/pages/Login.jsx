import SignUp from "../components/login/SignUp";
import SignIn from "../components/login/SignIn";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <div className="text-center mt-4">
                <div className="social-icons d-flex justify-content-center gap-3">
                  <button onClick={iniciarSesion} className="btn btn-secondary">
                    <i className="fab fa-google fa-lg"></i>
                  </button>
                  <button onClick={iniciarSesion} className="btn btn-secondary">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </button>
                  <button onClick={iniciarSesion} className="btn btn-secondary">
                    <i className="fab fa-github fa-lg"></i>
                  </button>
                </div>
                <p className="text-muted mb-2 mt-4">Or sign in with:</p>
              </div>

              <div className="text-center mt-4 mb-2">
                <p className="text-muted">
                  Please enter your login and password!
                </p>
              </div>

              <form>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                  />
                </div>

                <div className="form-group text-center mt-4">
                  <button
                    className="btn btn-outline-dark btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center">
                <p className="text-muted mb-0">
                  Forgot password?{" "}
                  <a href="#" className="text-decoration-none">
                    Click here
                  </a>
                </p>
                <p className="mt-2 mb-0">
                  Don't have an account?{" "}
                  <a href="#" className="text-decoration-none">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
