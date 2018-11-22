import {
  GET_ERRORS,
  GET_VENUES,
  LOADING,
} from '../actions/types';

const initialState = {
  venues_list: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VENUES:
    return {
      venues_list: action.payload,
      loading: false,
    };
    default:
      return state;
  }
}
