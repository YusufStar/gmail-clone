import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compose from './Compose';
import EmailBody from './EmailBody';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
import {selectSendMessageIsOpen} from './features/mailSlice'
import { Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const isMessageOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser)

  return (
    <>
        <div className="App">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Emaillist />
          </div>
          {
            isMessageOpen && <Compose />
          }
        </div>
    </>
  );
}

export default App;
