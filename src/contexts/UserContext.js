import React, { useState, useEffect } from "react";
import fetchUser from "../services/fetchUser";
import loginService from "../services/loginService";
import logoutService from '../services/logoutService'
import logupService from '../services/logupService'
import { navigate } from "@reach/router";
const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const status = {
  loading: "loading",
  error: "error",
  nice: "nice",
};

function UserProvider({ children }) {
  const [user, setUser] = useState({ data: [], isLogged: false });
  const [msg, setMesagge] = useState("");
  const [loading, setLoading] = useState(status.loading);
  const [token, setToken] = useState(window.localStorage.getItem('store'));

  useEffect(() => {
    fetchUser(token).then((res) => {
      if (res.error) {
        setLoading(status.error);
        setUser({ data: [], isLogged: false });
        setMesagge(res.error);
      } else {
        setLoading(status.nice);
        setUser({ data: res.result, isLogged: true });
        setMesagge(msg)
      }
    });
  }, [token]);

  const doLogin = (dataForm) => {
    loginService(dataForm).then((res) => {

      const { error, msg, token } = res;

      if (error) {
        setMesagge(error)
        return;
      }
        setToken(token);

        setMesagge(msg)

        navigate("/");
    });
  };

  const doLogout = () => {
    logoutService(token).then(res => {
      const {msg, token, error} = res;
      if (error) {
        alert(msg);
        return;
      }

      setToken(token);

      setMesagge(msg)

      navigate('/signup')
      
    })
  }
  const doLogup = (data) => {
    logupService(data).then(res => {
      const {msg, token, error} = res;
      if (error) {
        alert(msg);
        return;
      }

      setToken(token);

      setMesagge(msg)

      navigate('/')
      
    })
  }

  return (
    <UserContext.Provider
      value={{
        user: user.data,
        isLogged: user.isLogged,
        doLogin,
        msg,
        loading,
        doLogout, 
        doLogup
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserConsumer };
