import React, { useContext } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import { UserProvider } from "../../contexts/UserContext";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Detail from "../Detail/Detail";
import Payment from "../Payment/Payment";
import Session from "../Session/Session";
import Manage from "../Manage/Manage";

const App = (props) => {
  return (
    <UserProvider>
      <Router>
        <Home path="/" />
        <Register path="/signup" />
        <Session path="/signin" />
        <Detail path="/detail" />
        <Payment path="/payment" />
        <Manage path="/manage" />
      </Router>
    </UserProvider>
  );
};

export default App;
