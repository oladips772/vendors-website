/** @format */
export const FetchCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case "CATEGORIES_GET_REQUEST":
      return {
        loading: true,
        categories: [],
      };
    case "CATEGORIES_GET_SUCCESS":
      return {
        loading: false,
        categories: action.payload,
      };
    case "CATEGORIES_GET_FAIL":
      return {
        loading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
