import { GET_USERS } from './UserType';
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