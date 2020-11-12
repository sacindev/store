import React from "react";
import styled from "styled-components";
import Login from "../../components/Form/Login";

function Session(props) {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default Session;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slateblue;
  padding: 10vh 0;
  min-height: 100vh;
`;
