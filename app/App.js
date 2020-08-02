import React from "react";
import "../public/index.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import Home from "./pages/Home";
import FormSignin from "./component/FormSignin";
import FormRegister from "./component/FormRegister";
import Log from "./pages/log";
const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Log path="/signin"/>
    </Router>
  );
};

export default App;
