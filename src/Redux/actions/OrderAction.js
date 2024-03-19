/** @format */
import URI from "../../utils/url";
import axios from "axios";

// ? list all new restaurant orders
export const listOrders = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({
      type: "ORDER_LIST_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/orders/new`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: "ORDER_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_LIST_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? list all restaurant pending orders
export const listPendingOrders = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({
      type: "ORDERS_PENDING_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/orders/pending`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: "ORDERS_PENDING_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDERS_PENDING_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? list all restaurant completed orders
export const listCompletedOrders = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({
      type: "ORDERS_COMPLETED_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/orders/completed`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: "ORDERS_COMPLETED_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDERS_COMPLETED_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? fetching order details action
export const listOrderDetails = (id) => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({
      type: "ORDER_DETAILS_REQUEST",
    });
    const { data } = await axios.get(`${URI}/api/orders/details/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: "ORDER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? accepting order
export const acceptOrder = (id, deliveryTime) => async (dispatch) => {
  try {
    dispatch({ type: "ACCEPT_ORDER_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/accept/${id}`, {
      deliveryTime,
    });
    dispatch({
      type: "ACCEPT_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ACCEPT_ORDER_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? rejecting order
export const rejectOrder = (id, rejectedReason) => async (dispatch) => {
  try {
    dispatch({ type: "REJECT_ORDER_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/reject/${id}`, {
      rejectedReason,
    });
    dispatch({
      type: "REJECT_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "REJECT_ORDER_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? order ready for pickup
export const readyOrderForPickup = (id) => async (dispatch) => {
  try {
    dispatch({ type: "READY_PICKUP_ORDER_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/ready-pickup/${id}`);
    dispatch({
      type: "READY_PICKUP_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "READY_PICKUP_ORDER_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? preparing order
export const prepareOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_PREPARING_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/preparing/${id}`);
    dispatch({
      type: "ORDER_PREPARING_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_PREPARING_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? deliver order
export const deliverOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_DELIVER_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/deliver/${id}`);
    dispatch({
      type: "ORDER_DELIVER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_DELIVER_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? order on the way
export const onTheWayOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_ONTHEWAY_REQUEST" });
    const { data } = await axios.put(`${URI}/api/orders/on-the-way/${id}`);
    dispatch({
      type: "ORDER_ONTHEWAY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_ONTHEWAY_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? searching for order
export const searchOrder = (id) => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "ORDER_SEARCH_REQUEST" });
    const { data } = await axios.get(
      `${URI}/api/orders/vendor-restaurants/search?id=${id}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    dispatch({
      type: "ORDER_SEARCH_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_SEARCH_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
