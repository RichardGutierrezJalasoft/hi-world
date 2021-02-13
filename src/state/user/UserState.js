import React, { useReducer } from 'react'
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import { readData, saveData } from '../../helpers/persistence';
import { GET_USERS } from './UserType';


const UserState = (props) => {
  const initialState = {
    users: []
  }
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = () => {
    const res = readData('Users');
    const data = res;
    dispatch({ type: GET_USERS, payload: data });
  }
  const postUser = (user) => {
    const resultSave = saveData('Users', user)
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
