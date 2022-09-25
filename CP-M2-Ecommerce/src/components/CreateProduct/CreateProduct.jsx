import React from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  const [values, setValues] = React.useState({
    description: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const dispatch = useDispatch();

  const handleInputChange = function (e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
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
        onChange={handleInputChange}
      />
      <label>Price: </label>
      <input
        type="number"
        name="price"
        value={values.price}
        onChange={handleInputChange}
      />
      <label>Description: </label>
      <textarea
        name="description"
        value={values.description}
        onChange={handleInputChange}
      ></textarea>
      <label>Stock: </label>
      <input
        type="number"
        name="stock"
        value={values.stock}
        onChange={handleInputChange}
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProduct;
