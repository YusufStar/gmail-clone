import React from 'react';
import './css/sidebar.css'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@material-ui/icons/Inbox'
import StarRateIcon from '@material-ui/icons/StarRate';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VidecamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon/>} className="compose_btn">Compose</Button>

        <Sidebaroptions Icon={InboxIcon} title="Inbox" number="224" isactive={true}/>
        <Sidebaroptions Icon={StarRateIcon} title="Starred" number="268"/>
        <Sidebaroptions Icon={WatchLaterIcon} title="Important" number="268"/>
        <Sidebaroptions Icon={SendIcon} title="Sent" number="268"/>
        <Sidebaroptions Icon={DraftsIcon} title="Drafts" number="268"/>
        <Sidebaroptions Icon={LabelIcon} title="Category" number="268"/>
        <Sidebaroptions Icon={DeleteIcon} title="[Map]/Trash" number="268"/>
        <Sidebaroptions Icon={FindInPageIcon} title="Documents" number="268"/>
        <Sidebaroptions Icon={ExpandMoreIcon} title="More" number="268"/>
        <br />
        <h3 className='sidebarOptions__heading'>
          Meet
        </h3>
        <Sidebaroptions Icon={VidecamIcon} title={"New meeting"} />
        <Sidebaroptions Icon={KeyboardIcon} title={"Join a meeting"} />
    </div>
  )
}

export default Sidebar