import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import mainImage from "../../img-cp2/main-image-cp2.jpg";
import ProductCard from "../ProductCard/ProductCard";

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={mainImage} alt="main-img" />
        <h3>Products</h3>
        {this.props.products?.map((el) => (
          <ProductCard
            name={el.name}
            image={el.image}
            id={el.id}
            stock={el.stock}
            price={el.price}
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
