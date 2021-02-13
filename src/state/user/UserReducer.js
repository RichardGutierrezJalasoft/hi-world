import { GET_USERS } from './UserType';
/**
 * Set result of the get users in the store
 * @param {Object} state the current state
 * @param {Object} action contains the payload
 * * @param {Object} action.payload contains the object which also
 * * contains the information about the user
 */

const setUser = function (state, payload) {
  const users = payload;
  return {
    ...state,
    users
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return setUser(state, payload)
    default:
      return state;
  }
};