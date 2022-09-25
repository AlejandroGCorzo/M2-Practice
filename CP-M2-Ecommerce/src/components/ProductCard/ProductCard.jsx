import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";

// FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.

const ProductCard = ({ name, image, id, stock, price }) => {
  return (
    <div>
      <button onClick={() => deleteProduct(id)}>x</button>
      <Link to={`/product/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={image} alt={name} />
      <p>Stock: {stock}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { deleteProduct })(ProductCard);
