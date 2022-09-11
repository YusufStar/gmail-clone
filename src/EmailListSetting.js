import React from 'react';
import './css/emaillist.css';
import { Icon, IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function EmailListSetting() {
  return (
    <div className='emaillist__settings'>
        <div className="emaillist_settingsLeft">
            <IconButton>
                <CheckBoxOutlineBlankIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

        <div className="emaillist_settingsRight">
            <p>1-50 of 10,222</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default EmailListSetting