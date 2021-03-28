import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_MOVIES_REQUEST:
      return { ...state, isLoading: true };
    case type.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        pages: action.payload.total_pages,
      };
    case type.GET_MOVIES_FAILED:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};
