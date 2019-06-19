import {
  FETCH_API_START,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR
} from "../actions";
const initialState = {
  characters: [],
  error: null,
  isLoading: false

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload.results
      };
    case FETCH_API_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
