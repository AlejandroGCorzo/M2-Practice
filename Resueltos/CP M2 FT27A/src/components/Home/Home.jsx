import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import main from '../../img-cp2/main-image-cp2.jpg';
import ProductCard from '../ProductCard/ProductCard';

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={main} alt="main-img" />
        <h3>Products</h3>
        {this.props.products &&
          this.props.products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              image={product.image}
            />
          ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export const mapDispatchToProps = { getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
