import React, { useState, useEffect } from "react";
import fetchUser from "../services/fetchUser";

const UserContext = React.createContext(null);
const { UserConsumer } = UserContext.Consumer;

function UserProvider({ children }) {
  const [state, setState] = useState({ isLogged: false, data: null });
  useEffect(() => {
    fetchUser(document.cookie.split("store=")[1]).then((res) => {
      console.log(res);
      if (res.error) {
        throw res.msg;
      } else {
        setState({ isLogged: true, data: res.user });
      }
    });
  }, [document.cookie]);

  const setLogin = () => {
    setState({...state, isLogged: true});
  }
  return (
    <UserContext.Provider
      value={{ isLogged: state.isLogged, data: state.data, setLogin }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserConsumer };
