/** @format */
// ? getting meals reducer
export const getMealsReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case "GET_MEALS_REQUEST":
      return {
        loading: true,
        meals: [],
      };
    case "GET_MEALS_SUCCESS":
      return {
        loading: false,
        meals: action.payload,
      };
    case "GET_MEALS_FAIL":
      return {
        loading: false,
        meals: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? creating meal reducer
export const createMealReducer = (state = { meal: {} }, action) => {
  switch (action.type) {
    case "CREATE_MEAL_REQUEST":
      return {
        loading: true,
        meal: {},
      };
    case "CREATE_MEAL_SUCCESS":
      return {
        loading: false,
        meal: action.payload,
        success: true,
      };
    case "CREATE_MEAL_FAIL":
      return {
        loading: false,
        meal: {},
        error: action.payload,
      };
    case "CREATE_MEAL_RESET":
      return {
        loading: false,
        meal: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

// ? updating meal reducer
export const updateMealReducer = (state = { meal: {} }, action) => {
  switch (action.type) {
    case "UPDATE_MEAL_REQUEST":
      return {
        loading: true,
        meal: {},
      };
    case "UPDATE_MEAL_SUCCESS":
      return {
        loading: false,
        meal: action.payload,
        success: true,
      };
    case "UPDATE_MEAL_FAIL":
      return {
        loading: false,
        meal: {},
        error: action.payload,
      };
    case "UPDATE_MEAL_RESET":
      return {
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

// ? creating meal reducer
export const deleteMealReducer = (state = { meal: {} }, action) => {
  switch (action.type) {
    case "DELETE_MEAL_REQUEST":
      return {
        loading: true,
        meal: {},
      };
    case "DELETE_MEAL_SUCCESS":
      return {
        loading: false,
        meal: action.payload,
        success: true,
      };
    case "DELETE_MEAL_FAIL":
      return {
        loading: false,
        meal: {},
        error: action.payload,
      };
    case "DELETE_MEAL_RESET":
      return {
        loading: false,
        meal: {},
        error: false,
        success: false,
      };
    default:
      return state;
  }
};
