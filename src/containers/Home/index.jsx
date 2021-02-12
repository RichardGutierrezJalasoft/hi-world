import React from 'react';
import InputText from '../../components/InputText';
import SaveButton from '../../components/SaveButton';
import UserList from '../../components/UserList';

const Home = () => {
  const dataEnglish = {
    title: 'Enter a name',
    desscription: 'Enter a name to say hello :)',
    titleButtonSave: 'Send',
    titleDefaultList: 'Upps we do not have users to say hello',
    titleList: 'Full Name',
    descriptionList: 'Greetings',
  }
  const dataUser = [
    {
      name: 'Lucas',
      greeting: 'Hello'
    },
    {
      name: 'Margarret',
      greeting: 'Good morning'
    },
    {
      name: 'Morgant',
      greeting: 'Bye bye '
    }
  ];

  const text = dataEnglish;
  const colorButton = 'success';
  const titleButton = text.titleButtonSave;
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <InputText title={text.title} description={text.desscription} />
        <div className="mt-5 ml-3 pt-4">
          <SaveButton color={colorButton} title={titleButton} />
        </div>
      </div>
      <div className="container">
        <UserList
          title={text.titleList}
          description={text.descriptionList}
          list={dataUser}
          defaultDescription={text.titleDefaultList}
        />
      </div>
    </>
  )
}

export default Home;
