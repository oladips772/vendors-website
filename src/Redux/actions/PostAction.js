/** @format */
import URL from "../../../utils/url";
import axios from "axios";

// ? fetching posts action
export const listPosts = () => async (dispatch) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    dispatch({
      type: "POST_LIST_REQUEST",
    });
    const { data } = await axios.get(`${URL}/api/posts/for-vendors`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: "POST_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_LIST_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? creating post action
export const createPost =
  (caption, meal, imgUrl, videoUrl, restaurant) => async (dispatch) => {
    try {
      dispatch({
        type: "POST_CREATE_REQUEST",
      });
      const { data } = await axios.post(`${URL}/api/posts/create`, {
        caption,
        meal,
        imgUrl,
        videoUrl,
        restaurant,
      });
      dispatch({
        type: "POST_CREATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POST_CREATE_FAIL",
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.error,
      });
    }
  };

// ? delete post action
export const DeletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "POST_DELETE_REQUEST",
    });
    const { data } = await axios.delete(`${URL}/api/posts/delete/${id}`);
    dispatch({
      type: "POST_DELETE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "POST_DELETE_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
