/** @format */
// ? vendor login
export const vendorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "VENDOR_LOGIN_REQUEST":
      return { loading: true };
    case "VENDOR_LOGIN_SUCCESS":
      return { loading: false, vendorInfo: action.payload };
    case "VENDOR_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "VENDOR_LOGIN_RESET":
      return { loading: false, error: null };
    case "VENDOR_LOGOUT":
      return {};
    default:
      return state;
  }
};

// ? vendor register reducer
export const vendorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "VENDOR_REGISTER_REQUEST":
      return { loading: true };
    case "VENDOR_REGISTER_SUCCESS":
      return { loading: false, registerInfo: action.payload };
    case "VENDOR_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    case "VENDOR_REGISTER_RESET":
      return { loading: false, error: null };
    default:
      return state;
  }
};

// ? vendor update profile
export const updateVendorReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_VENDOR_REQUEST":
      return { loading: true };
    case "UPDATE_VENDOR_SUCCESS":
      return { loading: false, vendorInfo: action.payload, success: true };
    case "UPDATE_VENDOR_FAIL":
      return { loading: false, error: action.payload };
    case "UPDATE_VENDOR_RESET":
      return { loading: false, error: null, success: false };
    default:
      return state;
  }
};

// ? vendor forgot password reducer
export const vendorForgotReducer = (state = {}, action) => {
  switch (action.type) {
    case "VENDOR_FORGOT_REQUEST":
      return {
        loading: true,
      };
    case "VENDOR_FORGOT_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "VENDOR_FORGOT_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "VENDOR_FORGOT_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? verify token reducer
export const verifyTokenReducer = (
  state = {
    email: "",
  },
  action
) => {
  switch (action.type) {
    case "VERIFY_TOKEN_REQUEST":
      return {
        loading: true,
      };
    case "VERIFY_TOKEN_SUCCESS":
      return {
        loading: false,
        success: true,
        email: action.payload,
      };
    case "VERIFY_TOKEN_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "VERIFY_TOKEN_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? reset password reducer
export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case "RESET_PASSWORD_REQUEST":
      return {
        loading: true,
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "RESET_PASSWORD_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "RESET_PASSWORD_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};
