import React from "react";
import { Link } from "@reach/router";

function Keypad() {
  return (
    <>
      <div onClick={() => console.log("Log")}>
        <Link to="/app/signin">
          <i
            className="material-icons"
            style={{ fontSize: "36px", color: "whitesmoke" }}
          >
            login
          </i>
        </Link>
      </div>
      <div onClick={() => console.log("cart")}>
        <Link>
          <span
            className="material-icons"
            style={{ fontSize: "36px", color: "whitesmoke" }}
          >
            shopping_cart
          </span>
        </Link>
      </div>
    </>
  );
}

export default Keypad;
