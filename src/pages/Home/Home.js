import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import { UserContext } from "../../contexts/UserContext";
function Home(props) {
  // console.log("Home render");
  // const { isLogin } = useContext(UserContext);

  return (
    <React.Fragment>
      <Header />
      <Product />
      <Product />
      <Product />
    </React.Fragment>
  );
}

export default Home;
