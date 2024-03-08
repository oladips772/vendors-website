/** @format */
export const postsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "POST_LIST_REQUEST":
      return {
        loading: true,
        posts: [],
      };
    case "POST_LIST_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
      };
    case "POST_LIST_FAIL":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? creating post reducer
export const postCreateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case "POST_CREATE_REQUEST":
      return {
        loading: true,
        post: {},
      };
    case "POST_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        post: action.payload,
      };
    case "POST_CREATE_FAIL":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };
    case "POST_CREATE_RESET":
      return {
        loading: false,
        post: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

// ? post delete reducer
export const postDeleteReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case "POST_DELETE_REQUEST":
      return {
        loading: true,
        post: {},
      };
    case "POST_DELETE_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "POST_DELETE_FAIL":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case "POST_DELETE_RESET":
      return {
        loading: false,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};
