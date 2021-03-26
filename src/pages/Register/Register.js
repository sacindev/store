import React from "react";
import styled from "styled-components";
import Logup from "../../components/Form/Logup";
 function Register(props) {
  return (
    <Container>
      <Logup />
    </Container>
  );
}

export default Register;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slateblue;
  padding: 10vh 0;
  min-height: 100vh;
`;
