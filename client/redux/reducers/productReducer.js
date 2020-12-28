import {
  LATEST_PRODUCTS,
  PRODUCT_DETAILS,
  LATEST_PRODUCTS_LOADING,
  PRODUCT_QA,
  POST_QUESTION,
  PRODUCT_REVIEWS,
  POST_PRODUCT_REVIEWS,
  PRODUCT_DETAILS_START,
  PRODUCT_DETAILS_FINISH,
  TRENDING_PRODUCTS,
  TRENDING_PRODUCTS_LOADING
} from "../types";

const initialState = {
  latestProducts: null,
  productDetails: null,
  hasError: false,
  latestLoading: false,
  productQA: null,
  postQnsResp: null,
  productReviews: null,
  postReviewResp: null,
  productDetailsLoading: false,
  trendingProducts: null,
  trendingLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LATEST_PRODUCTS:
      return {
        ...state,
        latestProducts: action.payload,
        hasError: false,
        latestLoading: false,
      };
    case LATEST_PRODUCTS_LOADING:
      return {
        ...state,
        latestLoading: true,
        hasError: false,
      };
    case TRENDING_PRODUCTS_LOADING:
      return {
        ...state,
        trendingLoading: true,
        hasError: false,
      };
    case TRENDING_PRODUCTS:
      return {
        ...state,
        trendingProducts: action.payload,
        hasError: false,
        trendingLoading: false,
      };
    case PRODUCT_DETAILS_START:
      return { ...state, productDetailsLoading: true, hasError: false };
    case PRODUCT_DETAILS_FINISH:
      return { ...state, productDetailsLoading: false, hasError: false };
    case PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload, hasError: false };
    case PRODUCT_QA:
      return { ...state, productQA: action.payload, hasError: false };
    case POST_QUESTION:
      return { ...state, postQnsResp: action.payload, hasError: false };
    case PRODUCT_REVIEWS:
      return { ...state, productReviews: action.payload, hasError: false };
    case POST_PRODUCT_REVIEWS:
      return { ...state, postReviewResp: action.payload, hasError: false };
    default:
      return state;
  }
};
