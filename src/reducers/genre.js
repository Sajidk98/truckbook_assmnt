import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_GENRE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_GENRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case type.GET_GENRE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
