import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import { useDispatch } from 'react-redux'
import { fetchData } from './components/redux/actions'
import FirstBlock from './components/FirstBlock';

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(fetchData())
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main__left">
          <UserInfo />
        </div>
        <div className="main__center">
          <FirstBlock />
        </div>
        <div className="main__right" />
      </main>
    </div>
  );
};

export default App;
