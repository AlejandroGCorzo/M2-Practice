import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Home from '../src/components/Home/Home';
import ProductDetail from '../src/components/ProductDetail/ProductDetail';
import CreateProduct from './components/CreateProduct/CreateProduct';

function App() {
  return (
    <>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/products/create" component={CreateProduct} />
    </>
  );
}
export default App;
