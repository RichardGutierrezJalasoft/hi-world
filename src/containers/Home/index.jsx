import React, { useEffect, useContext, useState } from 'react';
import InputText from '../../components/InputText';
import SaveButton from '../../components/SaveButton';
import UserList from '../../components/UserList';
import UserContext from "../../state/user/UserContext";
import { toast } from "react-toastify";
import { checkIfInputsAreEmpty, getGreeting } from '../../helpers/tools';
import './style.css';

const Home = ({ languageApp, greeting }) => {
  const { postUser, getUsers, users } = useContext(UserContext);
  const [user, setUser] = useState({ name: '', message: 0 });
  const sendGood = () => toast.success(languageApp.sendGood);
  const sendBad = () => toast.error(languageApp.sendBad);
  const handleChange = (prop, value) => {
    setUser({ ...user, [prop]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    if (!checkIfInputsAreEmpty(user.name)) {
      return sendBad()
    }
    user.message = getGreeting();
    if (postUser(user)) {
      sendGood();
    }
    setUser({ name: '', message: 0 });
  }
  const USER_NAME = 'name';

  useEffect(() => {
    getUsers();
  }, [])
  const colorButton = 'success';
  const titleButton = languageApp.titleButtonSave;
  return (
    <>
      <div className='sendGreeting'>
        <InputText
          title={languageApp.title}
          description={languageApp.desscription}
          handleChange={handleChange}
          text={user.name}
          textKey={USER_NAME}
          className="inputText"
        />
        <div className="mt-5 ml-3 pt-4">
          <SaveButton
            color={colorButton}
            title={titleButton}
            acction={saveUser}
          />
        </div>
      </div>
      <div className="container">
        <UserList
          title={languageApp.titleList}
          description={languageApp.descriptionList}
          list={users}
          defaultDescription={languageApp.titleDefaultList}
          greeting={greeting}
        />
      </div>
    </>
  )
}

export default Home;
