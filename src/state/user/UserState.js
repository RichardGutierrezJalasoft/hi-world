import React, { useReducer } from 'react'
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import { readData, saveData } from '../../helpers/persistence';
import { GET_USERS } from './UserType';


const UserState = (props) => {
  const USERS = 'Users';
  const initialState = {
    users: []
  }
  /**
  * state init to context user
  * @param {Object} state actual state
  */
  const [state, dispatch] = useReducer(UserReducer, initialState);
  /**
 * getUsers function that get all user state local 
 */
  const getUsers = () => {
    const res = readData(USERS);
    const data = res;
    dispatch({ type: GET_USERS, payload: data });
  }
  /**
  * postUser function that post user state local 
  * @param {Object} user object user
  * * @param {string} user.name name is a full name of the user
  * * @param {number} user.message code of the message 
  */
  const postUser = (user) => {
    const resultSave = saveData(USERS, user)
    getUsers();
    return resultSave;
  }
  return (
    <UserContext.Provider value={{
      users: state.users,
      getUsers,
      postUser
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
