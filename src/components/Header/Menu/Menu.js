import React, { useContext, useState } from "react";
import { push as Burger } from "react-burger-menu";
import Links from "../../Link/Link";
import { UserContext } from "../../../contexts/UserContext";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";

function Menu(props) {
  let { Toggle } = Navbar;
  let { isLogged } = useContext(UserContext);
  let [menu, setMenu] = useState(false);
  let [show, setShow] = useState(false);
  let menuClose = () => setMenu(false);
  let menuOpen = () => setMenu(true);

  const closeModal = () => {
    setShow(false);
  };
  const openModal = () => {
    Promise.resolve(setMenu(false)).then(setShow(true));
  };
  return (
    <Burger
      itemListClassName={"menu__list"}
      crossClassName={"menu__cross"}
      itemClassName={"menu__item"}
      menuClassName={"menu"}
      customBurgerIcon={<Toggle />}
      bodyClassName="none"
      disableAutoFocus
      isOpen={menu}
      onOpen={menuOpen}
      onClose={menuClose}
    >
      <Links to="/" symbol="home" name="Home" onClick={menuClose} />
      <Links to="" symbol="search" name="Search" onClick={openModal} />

      {isLogged ? (
        <Links to="/" name="Sing Out" symbol="exit_to_app" key={location} />
      ) : (
        <Links to="/signin" symbol="person" name="Sing In" key={location} />
      )}
      <Links to="/payment" name="Cart" symbol="shopping_cart" />
      {props.children(show, closeModal)}
    </Burger>
  );
}

export default Menu;
