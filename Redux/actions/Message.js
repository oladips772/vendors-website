/** @format */
import axios from "axios";
import URI from "../../utils/url";

export const GetMessages = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    dispatch({ type: "GET_MESSAGES_REQUEST" });
    const { data } = await axios.get(`${URI}/api/vendors/messages`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({ type: "GET_MESSAGES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_MESSAGES_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export const SendComplaint = (complaint, email) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_COMPLAINT_REQUEST" });
    await axios.post(`${URI}/api/messages/complaint/send`, {
      complaint,
      email,
    });
    dispatch({ type: "SEND_COMPLAINT_SUCCESS" });
  } catch (error) {
    dispatch({
      type: "SEND_COMPLAINT_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
