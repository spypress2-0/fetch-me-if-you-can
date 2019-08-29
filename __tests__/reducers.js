import message from "../client/reducers/reducers.js";
// import jest from 'jest';
describe('Add message reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      messageArray: [],
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(message(undefined, {})).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' , payload: {hello: "hello"}};
      expect(message(state, action)).toBe(state);
    });
  });

  describe('add message', () => {
    it('should return the updated state with added messaage', () => {
      const action = { type: 'ADD_MESSAGE' , payload: {hello: "hello"}};
      // make a copy of a message
      expect(message(state, agiction)).toBe(state);
    });
  });
  describe('clears a message', () => {
    it('should return the updated state with added messaage', () => {
      const action = { type: 'ADD_MESSAGE' , payload: {hello: "hello"}};
      // make a copy of a message
      expect(message(state, agiction)).toBe(state);
    });
  });
});