import React from "react";
import "materialize-css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes/Routes";

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="container blue-text">{routes}</div>
    </Router>
  );
}

export default App;
