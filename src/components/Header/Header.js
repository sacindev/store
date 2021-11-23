import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Keypad from "../Keypad";
import withSizes from "react-sizes";
import { Link } from "@reach/router";
import Search from "../Search/Search";
import Dropdown from "./Dropdown/Dropdown"

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 769,
});

const Header = ({ isMobile }) => {
  let { Brand } = Navbar;

  const conditionalRender = () => {
    let msg = null;
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
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "#1d2124",
        padding: "0",
        height: "50px",
      }}
    >
      {conditionalRender()}
    </Navbar>
  );
};

export default withSizes(mapSizesToProps)(Header);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  padding: 0;
  align-items: center;
  justify-items: center;
  gap: 1em;
  background-color: #212529;
  height: 100%;
`;

const Start = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  width: 100%;
`;

const End = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1em;
  width: 100%;
`;
