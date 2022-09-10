import React from 'react'
import './css/compose.css'
import RemoveIcon from '@material-ui/icons/Remove'
import HeightIcon from '@material-ui/icons/Height' 
import CloseIcon from '@material-ui/icons/Close' 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown' 
import FormatColorTextIcon from '@material-ui/icons/FormatColorText' 
import AttachFileIcon from '@material-ui/icons/AttachFile' 
import LinkIcon from '@material-ui/icons/Link' 
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon' 
import NoteAddIcon from '@material-ui/icons/NoteAdd' 
import PhotoIcon from '@material-ui/icons/Photo' 
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock' 
import CreateIcon from '@material-ui/icons/Create' 
import MoreVertIcon from '@material-ui/icons/MoreVert' 
import DeleteIcon from '@material-ui/icons/Delete' 

function Compose() {
  return (
    <div className='compose'>
        <div className="compose__header">
            <div className="compose__header__left">
                <span>New Message</span>
            </div>
            <div className="compose__header__right">
                <RemoveIcon />
                <HeightIcon />
                <CloseIcon />
            </div>
        </div>

        <div className="compose__body">
            <div className="compose__bodyForm">
                <input type="email"
                placeholder='Reciepents'/>

                <input type="text"
                placeholder='Subject'/>

                <textarea rows="20"></textarea>
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
    </div>
  )
}

export default Compose