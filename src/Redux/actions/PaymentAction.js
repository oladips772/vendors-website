/** @format */
import URI from "../../../../utils/url";
import axios from "axios";

export const GetPayments = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "GET_PAYMENTS_REQUEST" });
    const { data } = await axios.get(`${URI}/api/payments/vendor-payments`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "GET_PAYMENTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_PAYMENTS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
