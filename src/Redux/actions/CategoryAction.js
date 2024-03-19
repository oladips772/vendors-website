/** @format */
import URL from "../../utils/url";
import axios from "axios";

export const FetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "CATEGORIES_GET_REQUEST" });
    const { data } = await axios.get(`${URL}/api/categories`);
    dispatch({
      type: "CATEGORIES_GET_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CATEGORIES_GET_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
