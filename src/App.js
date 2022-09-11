import React from 'react';
import { useSelector } from 'react-redux';
import Compose from './Compose';
import EmailBody from './EmailBody';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
import {selectSendMessageIsOpen} from './features/mailSlice'

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);

  console.log(isMessageOpen)
  return (
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
  );
}

export default App;
