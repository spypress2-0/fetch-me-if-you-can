/**
 * ************************************
 *
 * @module  reducers
 * @description Reducer is responsible for grabbing the request and response objects sent by the server and adding them to the collection.
 *
 * ************************************
 */

import * as types from '../actions/actionTypes';

const initialState = {
  collection: [],
  message: {},
};

const parseMessage = (state = initialState, action) => {
  switch (action) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        currentMessage: action.payload,
      };
    default:
      return state;
  }
};

export default parseMessage;
