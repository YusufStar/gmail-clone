import React from 'react';
import './css/emaillist.css';
import EmailBody from './EmailBody';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';

function Emaillist() {
  return (
    <div className='emaillist'>
        <EmailListSetting />
        <EmailType />
        <EmailBody />
    </div>
  )
}

export default Emaillist