/** @format */
export const GetPaymentsReducer = (state = { payments: [] }, action) => {
  switch (action.type) {
    case "GET_PAYMENTS_REQUEST":
      return {
        loading: true,
      };
    case "GET_PAYMENTS_SUCCESS":
      return {
        loading: false,
        payments: action.payload,
      };
    case "GET_PAYMENTS_FAIL":
      return {
        loading: false,
        payments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
