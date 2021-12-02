import React from "react";
import Picture from "../Picture/Picture";
import "./Product.css";
import Card from "../Card/Card";

function Product({ descripcion, img, nombre }) {
  return (
    <Card>
      <Picture url="https://picsum.photos/200" />
      <main>
        <h5>{nombre || "Tittle"}</h5>
        <p>{descripcion || "Description "}</p>
      </main>
    </Card>
  );
}

export default Product;
