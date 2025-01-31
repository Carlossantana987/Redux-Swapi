// we'll need axios
import axios from "axios";

export const FETCH_API_START = "FETCH_API_START";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_ERROR = "FETCH_API_ERROR";

export const fetchAPI = () => dispatch => {
  dispatch({ type: FETCH_API_START });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch({ type: FETCH_API_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_API_ERROR, payload: err }));
};
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
