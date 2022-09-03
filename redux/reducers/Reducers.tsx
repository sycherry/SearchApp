import {GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE} from './Actions';

const intialState = {
  items: [],
  isFetching: true,
  error: null,
};

let useReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {...state, isFetching: false, items: action.items};

    case GET_ITEMS_FAILURE:
      return {isFetching: false, error: action.error};

    default:
      return state;
  }
};
export default useReducer;
