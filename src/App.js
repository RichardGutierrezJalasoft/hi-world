import { useState } from "react";
import './App.css';
import HomeContainer from './containers/Home';
import NavBar from './components/Navbar';
import UserState from "./state/user/UserState";
import { ToastContainer } from 'react-toastify';
import { changeLanguageData } from './helpers/tools';

function App() {
  const [language, setLanguage] = useState('en');
  const changeLanguage = (code, e) => {
    e.preventDefault();
    setLanguage(code)
  }
  const { languages, greeting, text } = changeLanguageData(language);
  return (
    <>
      <NavBar languages={languages} changeLanguage={changeLanguage} title={text.titleApp}/>
      <UserState>
        <HomeContainer languageApp={text} greeting={greeting} />
      </UserState>
      <ToastContainer />
    </>
  )
}

export default App;
