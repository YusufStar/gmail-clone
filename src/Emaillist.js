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

        <EmailBody name="Yusuf Yıldız" subject="Konu" message="Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu Mesaj Konusu" time="03:20 PM"/>
    </div>
  )
}

export default Emaillist