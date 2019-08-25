/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

import * as types from "./actionTypes";

export const addMessage = message => ({
  type: types.ADD_MESSAGE,
  payload: message
});

// export const toCollection = (message) => ({
//   type: types.TO_COLLECTION,
//   payload: message,
// });
