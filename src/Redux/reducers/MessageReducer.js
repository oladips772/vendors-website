/** @format */

export const messageReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case "GET_MESSAGES_REQUEST":
      return {
        loading: true,
        messages: [],
      };
    case "GET_MESSAGES_SUCCESS":
      return {
        loading: false,
        messages: action.payload,
      };
    case "GET_MESSAGES_FAIL":
      return {
        loading: false,
        messages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? send complaint
export const SendMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEND_COMPLAINT_REQUEST":
      return {
        loading: true,
      };
    case "SEND_COMPLAINT_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "SEND_COMPLAINT_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "SEND_COMPLAINT_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};
