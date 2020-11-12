import React, { useContext } from "react";
import { Link } from "@reach/router";
import { UserContext } from "../contexts/UserContext";

function Keypad() {
  const { isLogged } = useContext(UserContext);
  return (
    <ul
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: "0",
      }}
    >
      {isLogged ? (
        <li style={{ marginLeft: "2em" }}>
          <Link
            to="/"
            state={{ state: location }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <i
              className="material-icons"
              style={{ fontSize: "1.8em", color: "whitesmoke" }}
            >
              exit_to_app
            </i>
          </Link>
        </li>
      ) : (
        <li style={{ marginLeft: "2em" }}>
          <Link
            to="/signin"
            state={{ state: location }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <i
              className="material-icons"
              style={{ fontSize: "1.8em", color: "whitesmoke" }}
            >
              person
            </i>
          </Link>
        </li>
      )}
      <li style={{ marginLeft: "2em" }}>
        <Link to="/payment" style={{ display: "flex" }}>
          <span
            className="material-icons"
            style={{ fontSize: "1.8em", color: "whitesmoke" }}
          >
            shopping_cart
          </span>
          <span>0</span>
        </Link>
      </li>
    </ul>
  );
}

export default Keypad;
