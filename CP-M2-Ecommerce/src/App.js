import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import CreateProduct from "./components/CreateProduct/CreateProduct.jsx";

function App() {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/products/create" component={CreateProduct} />
      </React.Fragment>
    </div>
  );
}
export default App;
