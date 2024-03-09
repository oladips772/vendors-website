/** @format */
// ? create coupon reducer
export const CreateCouponReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_COUPON_REQUEST":
      return {
        loading: true,
      };
    case "CREATE_COUPON_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "CREATE_COUPON_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "CREATE_COUPON_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? get all coupons reducer
export const GetCouponsReducer = (state = { coupons: [] }, action) => {
  switch (action.type) {
    case "GET_COUPONS_REQUEST":
      return {
        loading: true,
      };
    case "GET_COUPONS_SUCCESS":
      return {
        loading: false,
        coupons: action.payload,
      };
    case "GET_COUPONS_FAIL":
      return {
        loading: false,
        error: action.payload,
        coupons: [],
      };
    case "GET_COUPONS_RESET":
      return {
        loading: false,
        error: null,
        coupons: [],
      };
    default:
      return state;
  }
};

// ? freeze coupon
export const FreezeCouponReducer = (state = {}, action) => {
  switch (action.type) {
    case "FREEZE_COUPON_REQUEST":
      return {
        loading: true,
      };
    case "FREEZE_COUPON_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "FREEZE_COUPON_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "FREEZE_COUPON_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? unfreeze coupon reducer
export const UnFreezeCouponReducer = (state = {}, action) => {
  switch (action.type) {
    case "UNFREEZE_COUPON_REQUEST":
      return {
        loading: true,
      };
    case "UNFREEZE_COUPON_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "UNFREEZE_COUPON_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "UNFREEZE_COUPON_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? delete coupon reducer
export const DeleteCouponReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_COUPON_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_COUPON_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_COUPON_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "DELETE_COUPON_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

// ? edit coupon reducer
export const EditCouponReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_COUPON_REQUEST":
      return {
        loading: true,
      };
    case "EDIT_COUPON_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "EDIT_COUPON_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "EDIT_COUPON_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};
