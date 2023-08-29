import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Login = () => {
  return (
    <div className="container">
      <h2 className="text-center">Login</h2>
      <div className="row">
        <div className="col">
        </div>
          <SignIn />
        <div className="col">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Login;
