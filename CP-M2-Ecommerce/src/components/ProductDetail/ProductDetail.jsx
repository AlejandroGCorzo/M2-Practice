import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tabien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = ({ match }) => {
  const selectedProduct = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductDetail(match.params.id));
  }, []);

  return (
    <div>
      <p>{selectedProduct.name}</p>
      <p>{selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.stock}</p>
    </div>
  );
};

export default ProductDetail;
