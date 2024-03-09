/** @format */
// ? getting vendor's restaurants
export const getMyRestaurantsReducer = (
  state = { restaurants: [] },
  action
) => {
  switch (action.type) {
    case "RESTAURANT_LIST_REQUEST":
      return {
        loading: true,
        restaurants: [],
      };
    case "RESTAURANT_LIST_SUCCESS":
      return {
        loading: false,
        restaurants: action.payload,
      };
    case "RESTAURANT_LIST_FAIL":
      return {
        loading: false,
        restaurants: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? creating a restaurant
export const createRestaurantReducer = (state = { restaurant: {} }, action) => {
  switch (action.type) {
    case "RESTAURANT_CREATE_REQUEST":
      return {
        loading: true,
        restaurant: {},
      };
    case "RESTAURANT_CREATE_SUCCESS":
      return {
        loading: false,
        restaurant: action.payload,
        success: true,
      };
    case "RESTAURANT_CREATE_FAIL":
      return {
        loading: false,
        restaurant: {},
        error: action.payload,
      };
    case "RESTAURANT_CREATE_RESET":
      return {
        loading: false,
        restaurant: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

// ? getting restaurant orders
export const getRestaurantOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "RESTAURANT_ORDERS_REQUEST":
      return {
        loading: true,
        orders: [],
      };
    case "RESTAURANT_ORDERS_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "RESTAURANT_ORDERS_FAIL":
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? getting restaurant meals
export const getRestaurantMealsReducer = (state = { meals: [] }, action) => {
  switch (action.type) {
    case "RESTAURANT_MEALS_REQUEST":
      return {
        loading: true,
        meals: [],
      };
    case "RESTAURANT_MEALS_SUCCESS":
      return {
        loading: false,
        meals: action.payload,
      };
    case "RESTAURANT_MEALS_FAIL":
      return {
        loading: false,
        meals: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? getting restaurant posts
export const getRestaurantPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "RESTAURANT_POSTS_REQUEST":
      return {
        loading: true,
        posts: [],
      };
    case "RESTAURANT_POSTS_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
      };
    case "RESTAURANT_POSTS_FAIL":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? update restaurant reducer
export const updateRestaurantReducer = (state = { rest: {} }, action) => {
  switch (action.type) {
    case "UPDATE_RESTAURANT_REQUEST":
      return {
        loading: true,
        rest: {},
      };
    case "UPDATE_RESTAURANT_SUCCESS":
      return {
        loading: false,
        rest: action.payload,
        success: true,
      };
    case "UPDATE_RESTAURANT_FAIL":
      return {
        loading: false,
        rest: {},
        error: action.payload,
      };
    case "UPDATE_RESTAURANT_RESET":
      return {
        loading: false,
        rest: {},
        error: null,
        success: false,
      };

    default:
      return state;
  }
};
