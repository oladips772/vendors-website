/** @format */
import axios from "axios";
import URI from "../../../../utils/url";

// ? vendor login action
export const VendorLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "VENDOR_LOGIN_REQUEST" });
    const { data } = await axios.post(`${URI}/api/auth/login`, {
      email,
      password,
    });
    dispatch({ type: "VENDOR_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("vendorInfo", JSON.stringify(data));
    localStorage.setItem("accessToken", data?.token);
  } catch (error) {
    dispatch({
      type: "VENDOR_LOGIN_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? register vendor
export const VendorRegister =
  ({ name, email, password, phoneNo, country, state, local_government }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "VENDOR_REGISTER_REQUEST" });
      const { data } = await axios.post(`${URI}/api/auth/register`, {
        name,
        email,
        password,
        phoneNo,
        country,
        state,
        local_government,
      });
      dispatch({ type: "VENDOR_REGISTER_SUCCESS", payload: data });
      localStorage.setItem("vendorInfo", JSON.stringify(data));
      localStorage.setItem("accessToken", data?.token);
    } catch (error) {
      dispatch({
        type: "VENDOR_REGISTER_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? update vendor action
export const UpdateVendor =
  ({ id, name, phoneNo, password, bankName, bankAccount, bankCode }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_VENDOR_REQUEST",
      });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${URI}/api/vendors/update-profile/${id}`,
        { name, phoneNo, password, bankName, bankAccount, bankCode },
        config
      );
      dispatch({
        type: "UPDATE_VENDOR_SUCCESS",
        payload: data,
      });
      localStorage.setItem("vendorInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "UPDATE_VENDOR_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? vendor logout action
export const VendorLogout = () => async (dispatch) => {
  dispatch({ type: "VENDOR_LOGOUT" });
  localStorage.removeItem("vendorInfo");
};

// ? vendor forgot password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "VENDOR_FORGOT_REQUEST" });
    await axios.post(`${URI}/api/vendors/forgot-password`, { email });
    dispatch({ type: "VENDOR_FORGOT_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "VENDOR_FORGOT_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? verify reset token
export const verifyResetToken = (otp, email) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_TOKEN_REQUEST" });
    const { data } = await axios.post(`${URI}/api/vendors/verify-reset-token`, {
      otp,
      email,
    });
    dispatch({ type: "VERIFY_TOKEN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "VERIFY_TOKEN_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? reset password
export const resetPassword = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });
    await axios.post(`${URI}/api/vendors/reset-password`, { email, password });
    dispatch({ type: "RESET_PASSWORD_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "RESET_PASSWORD_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
