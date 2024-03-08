/** @format */
import URL from "../../utils/url";
import axios from "axios";

// ? get meals action
export const GetMeals = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MEALS_REQUEST" });
    const { data } = await axios.get(`${URL}/api/meals/${id}`);
    dispatch({ type: "GET_MEALS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_MEALS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? creating meal action
export const createMeal =
  (
    mealName,
    mealImage,
    description,
    cookTime,
    restaurant,
    category,
    mealPrice,
    extraOptions,
    shipping
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "CREATE_MEAL_REQUEST" });
      const { data } = await axios.post(`${URL}/api/meals/create`, {
        mealName,
        mealImage,
        description,
        cookTime,
        restaurant,
        category,
        mealPrice,
        extraOptions,
        shipping,
      });
      dispatch({
        type: "CREATE_MEAL_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CREATE_MEAL_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? updating meal action
export const updateMeal =
  (
    mealName,
    mealImage,
    description,
    cookTime,
    restaurant,
    category,
    mealPrice,
    extraOptions,
    id,
    shipping
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_MEAL_REQUEST" });
      const { data } = await axios.put(`${URL}/api/meals/${id}`, {
        mealName,
        mealImage,
        description,
        cookTime,
        restaurant,
        category,
        mealPrice,
        extraOptions,
        shipping,
      });
      dispatch({
        type: "UPDATE_MEAL_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_MEAL_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? delete meal action
export const DeleteMeal = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MEAL_REQUEST" });
    const { data } = await axios.delete(`${URL}/api/meals/${id}`);
    dispatch({ type: "DELETE_MEAL_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_MEAL_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
