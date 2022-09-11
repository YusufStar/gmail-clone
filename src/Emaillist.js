import React, { useEffect, useState } from 'react';
import './css/emaillist.css';
import EmailBody from './EmailBody';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';
import { db } from './firebase'

function Emaillist() {

  const [emails, setEmails] = useState([]);

  useEffect(()=>{
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data() 
      })))
    })
  },[])

  return (
    <div className='emaillist'>
        <EmailListSetting />
        <EmailType />
    {
      emails.map(({id, data}) => {
        return <EmailBody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp * 1000 + data.timestamp / 1000000).toLocaleTimeString()}/>
      })
    }
    </div>
  )
}

export default Emaillist