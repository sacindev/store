import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Keypad from "./Keypad/Keypad";
import withSizes from "react-sizes";
import { Link } from "@reach/router";
import Search from "../Search/Search";
import Dropdown from "./Dropdown/Dropdown"
import './Header.css'

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 769,
});

const Header = ({ isMobile }) => {
  let { Brand } = Navbar;

  const conditionalRender = () => {
    let msg;
    if (isMobile) {
      msg = <Dropdown />;
    } else {
      msg = (
        <Container>
          <Start>
            <Link to="/">
              <Brand style={{ color: "#fff" }}>Store</Brand>
            </Link>
          </Start>
          <Center>
            <Search />
          </Center>
          <End>
            <Keypad />
          </End>
        </Container>
      );
    }

    return msg;
  };


  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
    >
      {conditionalRender()}
    </Navbar>
  );
};

export default withSizes(mapSizesToProps)(Header);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100vw;
  gap: 1rem;
`;

const Start = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const End = styled.div`
  display: flex;
  align-items: center;
`;
