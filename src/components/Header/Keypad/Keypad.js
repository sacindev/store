import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import Icon from '../../Icon/Icon';
import './Keypad.css'
function Keypad() {
  const { isLogged, doLogout} = useContext(UserContext);

  const conditionalRender = () => {
    if (isLogged) {
      return (
        <ul className="list">
          <li onClick={() => doLogout()} >
            <Icon path='/'  name="exit_to_app" />
          </li>
          <li style={{ marginLeft: "2em" }}>
            <Icon path="/payment" name="shopping_cart" />
          </li>
        </ul>
      );
    }

    return (
      <ul className="list">
        <li>
          <Icon path="/signin" name="person" />
        </li>
        <li>
          <Icon path="/payment" name="shopping_cart" />
        </li>
      </ul>
    );
  };

  return <div>{conditionalRender()}</div>;
}

export default Keypad;
