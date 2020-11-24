import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import FirstBlock from './components/FirstBlock';

const App = () => {
  const initialData = {
    _id: 123,
    userName: 'Андрей Снигирёв',
    userProf: 'UX/UI designer',
    answers: 0,
    views: 0,
    salary: 35000,
    exp: 9,
    conditions: ['полная занятость', 'удаленная работа'],
  };
  const [userData, setUserData] = useState(initialData);

  useEffect(() => {
    const fetchUserData = async () => {
      // eslint-disable-next-line
      const response = await fetch("/" + initialData._id,{method: 'GET'})
      //        setUserData(await response.json())
      setUserData(initialData);
    };
    fetchUserData();
    // eslint-disable-next-line
  }, [userData])

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main__left">
          <UserInfo userData={userData} />
        </div>
        <div className="main__center">
          <FirstBlock userData={userData} />
        </div>
        <div className="main__right" />
      </main>
    </div>
  );
};

export default App;
