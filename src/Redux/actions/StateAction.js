/** @format */
import URI from "../../../utils/url";
import axios from "axios";

// ? getting states
export const GetStates = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_STATES_REQUEST" });
    const { data } = await axios.get(`${URI}/api/states`);
    dispatch({ type: "GET_STATES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_STATES_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? getting local governments
export const GetLocalGovernments = (state) => async (dispatch) => {
  try {
    dispatch({ type: "GET_LOCAL_GOVERNMENTS_REQUEST" });
    const { data } = await axios.get(
      `${URI}/api/local-governments/${state._id}`
    );
    dispatch({ type: "GET_LOCAL_GOVERNMENTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_LOCAL_GOVERNMENTS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
