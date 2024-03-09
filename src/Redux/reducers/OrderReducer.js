/** @format */
// ? order list reducers
export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST_REQUEST":
      return {
        loading: true,
        orders: [],
      };
    case "ORDER_LIST_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ORDER_LIST_FAIL":
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    case "ORDER_LIST_RESET":
      return {
        loading: false,
        orders: [],
        error: null,
      };
    default:
      return state;
  }
};

// ? pending order reducers
export const pendingOrdersReducer = (state = { pendingOrders: [] }, action) => {
  switch (action.type) {
    case "ORDERS_PENDING_REQUEST":
      return {
        loading: true,
        pendingOrders: [],
      };
    case "ORDERS_PENDING_SUCCESS":
      return {
        loading: false,
        pendingOrders: action.payload,
      };
    case "ORDERS_PENDING_FAIL":
      return {
        loading: false,
        pendingOrders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? completed order reducers
export const completedOrdersReducer = (
  state = { completedOrders: [] },
  action
) => {
  switch (action.type) {
    case "ORDERS_COMPLETED_REQUEST":
      return {
        loading: true,
        completedOrders: [],
      };
    case "ORDERS_COMPLETED_SUCCESS":
      return {
        loading: false,
        completedOrders: action.payload,
      };
    case "ORDERS_COMPLETED_FAIL":
      return {
        loading: false,
        completedOrders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? orders details
export const orderDetailsReducer = (state = { details: {} }, action) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return {
        loading: true,
        details: {},
      };
    case "ORDER_DETAILS_SUCCESS":
      return {
        loading: false,
        details: action.payload,
      };
    case "ORDER_DETAILS_FAIL":
      return {
        loading: false,
        details: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? accepting order reducer
export const acceptOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ACCEPT_ORDER_REQUEST":
      return {
        loading: true,
        order: {},
      };
    case "ACCEPT_ORDER_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "ACCEPT_ORDER_FAIL":
      return {
        loading: false,
        order: {},
        error: action.payload,
      };
    case "ACCEPT_ORDER_RESET":
      return {
        loading: false,
        order: {},
        error: null,
      };
    default:
      return state;
  }
};

// ? accepting order reducer
export const rejectOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "REJECT_ORDER_REQUEST":
      return {
        rejectLoading: true,
        order: {},
      };
    case "REJECT_ORDER_SUCCESS":
      return {
        rejectLoading: false,
        order: action.payload,
        rejectSuccess: true,
      };
    case "REJECT_ORDER_FAIL":
      return {
        rejectLoading: false,
        order: {},
        rejectError: action.payload,
      };
    case "REJECT_ORDER_RESET":
      return {
        rejectLoading: false,
        order: {},
        rejectError: null,
      };
    default:
      return state;
  }
};

// ? accepting order reducer
export const readyForPickUpOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "READY_PICKUP_ORDER_REQUEST":
      return {
        loading: true,
        order: {},
      };
    case "READY_PICKUP_ORDER_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "READY_PICKUP_ORDER_FAIL":
      return {
        loading: false,
        order: {},
        error: action.payload,
      };
    case "READY_PICKUP_ORDER_RESET":
      return {
        loading: false,
        order: {},
        error: null,
      };
    default:
      return state;
  }
};

// ? preparing order reducer
export const preparingOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ORDER_PREPARING_REQUEST":
      return {
        loading: true,
        order: {},
      };
    case "ORDER_PREPARING_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "ORDER_PREPARING_FAIL":
      return {
        loading: false,
        order: {},
        error: action.payload,
      };
    case "ORDER_PREPARING_RESET":
      return {
        loading: false,
        order: {},
        error: null,
      };
    default:
      return state;
  }
};

// ? delivered order reducer
export const deliverOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ORDER_DELIVER_REQUEST":
      return {
        loading: true,
        order: {},
      };
    case "ORDER_DELIVER_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "ORDER_DELIVER_FAIL":
      return {
        loading: true,
        order: {},
        error: action.payload,
      };
    case "ORDER_DELIVER_RESET":
      return {
        loading: false,
        order: {},
        error: null,
      };
    default:
      return state;
  }
};

// ? order on the way reducer
export const orderOnTheWayOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ORDER_ONTHEWAY_REQUEST":
      return {
        loading: true,
        order: {},
      };
    case "ORDER_ONTHEWAY_SUCCESS":
      return {
        loading: false,
        order: action.payload,
        success: true,
      };
    case "ORDER_ONTHEWAY_FAIL":
      return {
        loading: false,
        order: {},
        error: action.payload,
      };
    case "ORDER_ONTHEWAY_RESET":
      return {
        loading: false,
        order: {},
        error: null,
      };
    default:
      return state;
  }
};

// ? order on the way reducer
export const searchOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_SEARCH_REQUEST":
      return {
        loading: true,
        orders: [],
      };
    case "ORDER_SEARCH_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
        success: true,
      };
    case "ORDER_SEARCH_FAIL":
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    case "ORDER_SEARCH_RESET":
      return {
        loading: false,
        orders: [],
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
