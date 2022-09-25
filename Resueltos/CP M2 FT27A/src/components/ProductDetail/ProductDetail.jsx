import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;

  React.useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.productDetail);

  return (
    <div>
      {product.name}, {product.price}, {product.description}, {product.stock}
    </div>
  );
};

export default ProductDetail;
