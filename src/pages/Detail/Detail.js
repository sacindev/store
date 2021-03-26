import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
function Detail(props) {
  return (
    <Container>
    <Header/>
      <h1>Detail Page</h1>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
