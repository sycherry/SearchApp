const API_URL = 'https://data.messari.io/api/v2/assets';

export const getItems = () => {
  return async (dispatch: any) => {
    let json;
    try {
      const result = await fetch(API_URL);
      json = await result.json();
      dispatch(getItemsSuccess(json));
    } catch (error) {
      dispatch(getItemsFailure(error));
    }
  };
};

// This code is for testing of loading indicator
// function wait(seconds:number) {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve('') }, seconds * 1000);
//     })
// }

export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const getItemsSuccess = (json: any) => {
  return {
    type: GET_ITEMS_SUCCESS,
    items: json,
  };
};

export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
const getItemsFailure = (error: any) => {
  return {
    type: GET_ITEMS_FAILURE,
    error: error,
  };
};
