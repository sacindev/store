import { token } from "morgan";
import React, { useState, useEffect } from "react";
import fetchUser from "../services/fetchUser";
import { findCookie } from "../utils/findCookie";

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

function UserProvider({ children }) {
  const [state, setState] = useState({ isLogged: false, data: null });

  let cookie = findCookie("store");
  useEffect(() => {
    fetchUser(cookie || null)
      .then((res) => {
        if (res.error) {
          throw res.msg;
        } else {
          setState({ isLogged: true, data: res.result });
        }
      });
  }, []);


  const setToken = (token) => {
    fetchUser(token)
      .then((res) => {
        if (res.error) {
          throw res.msg;
        } else {
          setState({ isLogged: true, data: res.result });
        }
      });
  };

  const deleteToken = () => {
    let cookie = findCookie("asdf");
  }


  return (
    <UserContext.Provider
      value={
        {
          isLogged: state.isLogged,
          data: state.data,
          setToken
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserConsumer };
