/**
 * ************************************
 *
 * @module  reducers
 * @description Reducer is responsible for grabbing the request and response objects sent by the server and adding them to the collection.
 *
 * ************************************
 */

import * as types from "../actions/actionTypes";

const initialState = {
  messageArray: []
  // need a way to give a unique key if we have messages to be an object
  // message: {}
};

const reducers = (state = initialState, action) => {
  let messageArray;
  switch (action.type) {
    case types.ADD_MESSAGE:
      console.log('Payload:', action.payload);
      const messageData = action.payload;
      messageArray = state.messageArray.slice();
      messageArray.push(messageData);
      return {
        ...state,
        messageArray
      };
    default:
      return state;
  }
};

export default reducers;
