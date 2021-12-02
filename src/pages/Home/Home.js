import React from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

function Home() {
  const list = [{}, {}, {}, {}, {}];
  return (
    <>
      <Header />
      <main>{list.map((item, index) => <Product key={index}/>)}</main>
    </>
  );
}

export default Home;
