/**
 * ************************************
 *
 * @module  reducers
 * @description Reducer is responsible for grabbing the request and response objects sent by the server and adding them to the collection.
 *
 * ************************************
 */

//Getting actions from Actions folder;
import * as types from "../actions/actionTypes";

//Setting initial state that we're going to use;
const initialState = {
  messageArray: [],
  totalRequests: 0,
  badRequests: 0,
  goodRequests: 0,
  view: "table"
};

//Reducer function, (where the magic happens);
const reducers = (state = initialState, action) => {
  //initalize a variable called messageArray; (Scope of state will not effect this initialization.);
  let messageArray;
  let view;
  let totalRequests;

  switch (action.type) {
    //IF ACTION.TYPE === ADD_MESSAGE;
    case types.ADD_MESSAGE:
      //Setting Payload as a variable for easier use;
      const messageData = action.payload;
      //Create shallow copy of the array inside state copy & set it to initialize variable we made earlier;
      messageArray = state.messageArray.slice();
      //push payload which is an OBJECT into shallow copied array;
      messageArray.push(messageData);
      totalRequests++;

      //return new state copy with our new array inside;
      return {
        ...state,
        messageArray,
        totalRequests
      };

    case types.SET_VIEW:
      view = action.payload;
      return {
        ...state,
        view
      };

    //return default state;
    default:
      return state;
  }
};

export default reducers;
