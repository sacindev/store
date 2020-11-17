import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Search from "../search/Search";
import styled from "styled-components";
import Keypad from "./Keypad";
import { Link } from "@reach/router";
const Header = () => {
  const { Brand, Toggle, Collapse } = Navbar;
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container style={{ padding: "0" }}>
        <Start>
          <Link to="/">
            <Brand>Store</Brand>
          </Link>
        </Start>
        <Center>
          <Search />
        </Center>
        <End>
          <Keypad />
        </End>
      </Container>
    </Navbar>
  );
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  padding: 0;
  align-items: center;
  justify-items: center;
  gap: 1em;
`;

const Start = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const End = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
