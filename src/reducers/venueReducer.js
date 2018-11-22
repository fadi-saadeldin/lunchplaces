import {
  GET_ERRORS,
  GET_VENUES,
  LOADING,
  SEARCH_CHANGED
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

    // case UPDATE_STATUS_SUCCESS:
    // return {
    //   update_device_success:action.payload
    // };
    // case UPDATE_STATUS_ERROR:
    // return {

    //   error:'error',
    //   update_device_error:action.payload
    // };
    default:
      return state;
  }
}
