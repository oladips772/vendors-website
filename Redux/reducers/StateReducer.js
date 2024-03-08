/** @format */

// ? states reducer
export const GetStateReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case "GET_STATES_REQUEST":
      return {
        loading: true,
        states: [],
      };
    case "GET_STATES_SUCCESS":
      return {
        loading: false,
        states: action.payload,
      };
    case "GET_STATES_FAIL":
      return {
        loading: false,
        states: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? local governments reducer
export const GetLocalGovernmentReducer = (
  state = { localGovernments: [] },
  action
) => {
  switch (action.type) {
    case "GET_LOCAL_GOVERNMENTS_REQUEST":
      return {
        loading: true,
        localGovernments: [],
      };
    case "GET_LOCAL_GOVERNMENTS_SUCCESS":
      return {
        loading: false,
        localGovernments: action.payload,
      };
    case "GET_LOCAL_GOVERNMENTS_FAIL":
      return {
        loading: false,
        localGovernments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
