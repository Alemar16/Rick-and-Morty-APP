import propTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: propTypes.node,
};
export default PrivateRoutes;

// import propTypes from "prop-types";
// import { UserAuth } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// const PrivateRoutes = ({ children }) => {
//   const { user } = UserAuth();
//   if (!user) {
//     return <Navigate to="/home" />;
//   }
//   return children;
// };
// PrivateRoutes.propTypes = {
//   children: propTypes.node.isRequired
// }
// export default PrivateRoutes;
