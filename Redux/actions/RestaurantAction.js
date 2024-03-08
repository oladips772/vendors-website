/** @format */
import axios from "axios";
import URI from "../../utils/url";

// ? create restaurant action
export const CreateRestaurant =
  ({
    name,
    about,
    bannerImage,
    openingTime,
    closingTime,
    address,
    country,
    state,
    local_government,
    deliveryType,
  }) =>
  async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      dispatch({ type: "RESTAURANT_CREATE_REQUEST" });
      const { data } = await axios.post(
        `${URI}/api/restaurants/register`,
        {
          name,
          about,
          bannerImage,
          openingTime,
          closingTime,
          address,
          country,
          state,
          local_government,
          deliveryType,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch({ type: "RESTAURANT_CREATE_SUCCESS", payload: data });
      localStorage.setItem("vendorInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "RESTAURANT_CREATE_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? getting vendors restaurant action
export const GetMyRestaurants = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "RESTAURANT_LIST_REQUEST" });
    const { data } = await axios.get(`${URI}/api/restaurants/my-restaurants`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "RESTAURANT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "RESTAURANT_LIST_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? getting vendor's restaurants orders
export const GetRestaurantOrders = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "RESTAURANT_ORDERS_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/restaurants/my-orders/${id}`);
    dispatch({
      type: "RESTAURANT_ORDERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RESTAURANT_ORDERS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? getting vendor's restaurant meals
export const GetRestaurantMeals = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "RESTAURANT_MEALS_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/restaurants/my-meals/${id}`);
    dispatch({
      type: "RESTAURANT_MEALS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RESTAURANT_MEALS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? getting vendor's restaurant posts
export const GetRestaurantPosts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "RESTAURANT_POSTS_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/restaurants/my-posts/${id}`);
    dispatch({
      type: "RESTAURANT_POSTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RESTAURANT_POSTS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? update restaurant action
export const UpdateRestaurant =
  (
    id,
    name,
    about,
    address,
    bannerImage,
    openingTime,
    closingTime,
    deliveryType
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_RESTAURANT_REQUEST" });
      const { data } = await axios.put(
        `${URI}/api/restaurants/update-restaurant/${id}`,
        {
          name,
          about,
          address,
          bannerImage,
          openingTime,
          closingTime,
          deliveryType,
        }
      );
      dispatch({
        type: "UPDATE_RESTAURANT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_RESTAURANT_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };
