import axios from "axios";

export const GET_ALL_TRIPS_REQUEST = "GET_ALL_TRIPS_REQUEST";
export const GET_ALL_TRIPS_SUCCESS = "GET_ALL_TRIPS_SUCCESS";
export const GET_ALL_TRIPS_ERROR = "GET_ALL_TRIPS_ERROR";

const getTripSuccess = (payload) => ({
  type: GET_ALL_TRIPS_SUCCESS,
  payload,
});

const getTripError = (payload) => ({
  type: GET_ALL_TRIPS_ERROR,
  payload,
});

export const getAllTrips = () => (dispatch) => {
  dispatch({ type: GET_ALL_TRIPS_REQUEST });
  return axios
    .get("api/Trips/GetTrips")
    .then((res) => {
      dispatch(getTripSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getTripError("something went wrong"));
      return Promise.reject();
    });
};
