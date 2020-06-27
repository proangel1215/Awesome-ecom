import { LATEST_PRODUCTS, PRODUCT_DETAILS } from "../types";

const initialState = {
  latestProducts: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LATEST_PRODUCTS:
      return { latestProducts: action.payload };
    default:
      return state;
  }
};
