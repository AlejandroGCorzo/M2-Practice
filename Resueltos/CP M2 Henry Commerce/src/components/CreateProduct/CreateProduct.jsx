import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  const [values, setValues] = React.useState({
    name: '',
    price: 0,
    description: '',
    stock: 0,
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createProduct(values));
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <label>Price: </label>
        <input
          name="price"
          type="number"
          value={values.price}
          onChange={handleChange}
        />
        <label>Description: </label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <label>Stock: </label>
        <input
          type="number"
          name="stock"
          value={values.stock}
          onChange={handleChange}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
