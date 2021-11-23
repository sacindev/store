import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import { UserConsumer } from "../../contexts/UserContext";

function Home() {
  return (
    <UserConsumer>
      {(context) => (
        <Fragment>
          <Header />
          <Product />
          <Product />
          <Product />
        </Fragment>
      )
      }
    </UserConsumer>
  );
}

export default Home;
