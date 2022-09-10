import React from 'react';
import Compose from './Compose';
import EmailBody from './EmailBody';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="app__body">
        <Sidebar />
        <Emaillist />
      </div>
      <Compose />
    </div>
  );
}

export default App;
