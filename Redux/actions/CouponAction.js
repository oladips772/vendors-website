/** @format */
import axios from "axios";
import URI from "../../utils/url";

// ? create coupon action
export const CreateCoupon =
  ({
    code,
    discountPercent,
    minimumOrderAmount,
    maximumOrderAmount,
    store,
    couponType,
    discountAmount,
    totalUse,
    isGeneral,
    createdByVendor,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "CREATE_COUPON_REQUEST" });
      await axios.post(`${URI}/api/coupons/create`, {
        code,
        discountPercent,
        minimumOrderAmount,
        maximumOrderAmount,
        store,
        couponType,
        discountAmount,
        totalUse,
        isGeneral,
        createdByVendor,
      });
      dispatch({ type: "CREATE_COUPON_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "CREATE_COUPON_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? edit coupon
export const EditCouponAction =
  ({
    id,
    code,
    discountPercent,
    minimumOrderAmount,
    maximumOrderAmount,
    store,
    couponType,
    discountAmount,
    totalUse,
    isGeneral,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "EDIT_COUPON_REQUEST" });
      await axios.put(`${URI}/api/coupons/edit/${id}`, {
        code,
        discountPercent,
        minimumOrderAmount,
        maximumOrderAmount,
        store,
        couponType,
        discountAmount,
        totalUse,
        isGeneral,
      });
      dispatch({ type: "EDIT_COUPON_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "EDIT_COUPON_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? get all coupons
export const GetAllCoupons = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "GET_COUPONS_REQUEST" });
    const { data } = await axios.get(`${URI}/api/coupons/vendors-coupon`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "GET_COUPONS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_COUPONS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? freeze coupon
export const FreezeCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FREEZE_COUPON_REQUEST" });
    await axios.put(`${URI}/api/coupons/freeze/${id}`);
    dispatch({ type: "FREEZE_COUPON_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "FREEZE_COUPON_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? unfreeze coupon
export const UnFreezeCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: "UNFREEZE_COUPON_REQUEST" });
    await axios.put(`${URI}/api/coupons/unfreeze/${id}`);
    dispatch({ type: "UNFREEZE_COUPON_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "UNFREEZE_COUPON_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? delete coupon
export const DeleteCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_COUPON_REQUEST" });
    await axios.delete(`${URI}/api/coupons/${id}`);
    dispatch({ type: "DELETE_COUPON_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "DELETE_COUPON_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
