import React from 'react';
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
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
        <EmailBody />
      </div>

    </div>
  );
}

export default App;
