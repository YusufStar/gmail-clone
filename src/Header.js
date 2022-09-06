import React from "react";
import './css/header.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
            </div>

            <div className="header__middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <input type="text" placeholder="Search mail"/>
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                </div>
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
                
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>

                <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky1lFritf3oQ2M7YWntYX3DttNY5KEK3dtDeov6Q1w=s32-c-mo"></Avatar>
            </div>
        </div>
    );
}

export default Header;