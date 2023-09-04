import { useState } from "react";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
