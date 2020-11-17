import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

function CardComponent({descripcion, img, nombre}) {
  const { Body, Text, Title, Img, Footer } = Card;
  return (
    <>
      <Card>
        <Img
          variant="top"
          src={img}
        />
        <Body>
          <Title>{nombre}</Title>
          <Text>{descripcion}</Text>
        </Body>
          <Footer>FOOTER</Footer>
      </Card>
    </>
  );
}

export default CardComponent;

