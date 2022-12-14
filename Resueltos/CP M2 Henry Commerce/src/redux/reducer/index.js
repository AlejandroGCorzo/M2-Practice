// Importa las action types acá
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
