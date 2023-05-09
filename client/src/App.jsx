import React from "react";
import "materialize-css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes/Routes";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const {token, userId, login, logout} = useAuth()
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="container blue-text">{routes}</div>
    </Router>
  );
}

export default App;
