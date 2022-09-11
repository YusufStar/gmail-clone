import React, { useState } from 'react'
import './css/compose.css'
import RemoveIcon from '@material-ui/icons/Remove'
import HeightIcon from '@material-ui/icons/Height' 
import CloseIcon from '@material-ui/icons/Close' 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link' 
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd' 
import PhotoIcon from '@material-ui/icons/Photo' 
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create' 
import MoreVertIcon from '@material-ui/icons/MoreVert' 
import DeleteIcon from '@material-ui/icons/Delete' 
import { closeSendMessage } from './features/mailSlice'
import {useDispatch} from 'react-redux'
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Compose() {

    const [to, setTo] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault();
        if(to==="")
        {
            return alert("To is required")
        }
        if(subject==="")
        {
            return alert("Subject is required")
        }
        if(message==="")
        {
            return alert("Message is required")
        }

        db.collection("emails").add({
            to,
            subject,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setTo("");
        setsubject("");
        setMessage("");
        alert("Email sent successfully");
        dispatch(closeSendMessage())

    }

  return (
    <div className='compose'>
        <div className="compose__header">
            <div className="compose__header__left">
                <span>New Message</span>
            </div>
            <div className="compose__header__right">
                <RemoveIcon />
                <HeightIcon />
                <CloseIcon onClick={() => dispatch(closeSendMessage())}/>
            </div>
        </div>
        <form onSubmit={formSubmit}>
        <div className="compose__body">
            <div className="compose__bodyForm">
                <input type="email"
                placeholder='Reciepents'
                value={to}
                maxLength="25"
                onChange={(e) => setTo(e.target.value)} />

                <input type="text"
                placeholder='Subject'
                value={subject}
                maxLength="30"
                onChange={(e) => setsubject(e.target.value)} />

                <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
            </div>
        </div>

        <div className="compose__footer">
            <div className="compose__footerLeft">
                <button type='submit'>
                    Send <ArrowDropDownIcon />
                </button>
            </div>

            <div className="compose__footerRight">
                <FormatColorTextIcon />
                <AttachFileIcon />
                <LinkIcon />
                <InsertEmoticonIcon />
                <NoteAddIcon />
                <PhotoIcon />
                <PhonelinkLockIcon />
                <CreateIcon />
                <MoreVertIcon />
                <DeleteIcon />
            </div>
        </div>

        </form>

    </div>

  )
}

export default Compose