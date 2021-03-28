import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case type.GET_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
