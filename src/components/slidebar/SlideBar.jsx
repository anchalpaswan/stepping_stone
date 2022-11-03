
import React from "react";
import "./slidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add";
import SlidebarChannel from "./SlidebarChannel";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import HeadSetIcon from '@material-ui/icons/Headset'
import MicIcon from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'
export default function Sidebar() {
return (
    <>     
        <div className="sidebar">
            <div className="sidebar__top">
            <h3>Username</h3>
            <ExpandMoreIcon/>
            </div>
        <div className = "sidebar__channels">
            <div className = "sidebar__channelsHeader">
               <div className="sidebar__header">
               <h4>Text Channels</h4>
               </div>
            </div>
            <AddIcon className = "sidebar__addChannel"/>
        </div>
        <div className = "sidebar__channelsList">
        <SlidebarChannel/>
        <SlidebarChannel/>
        <SlidebarChannel/>
        <SlidebarChannel/>
        </div>
        <div className = "sidebar__voice">
            <SignalCellularAltIcon className="sidebar__cellularVoiceIcon" />
            <div className="sidebar__voiceInfo">
                <h3>
                Voice Connected
                </h3>
                <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcon">
                <InfoOutlinedIcon/>
                <CallIcon/>
            </div>
        </div>

        <div className="sidebar__profile">
            <Avatar className="sidebar__profileAvatar"/>
      
        <div className="sidebar__profileInfo">
            <h3>username</h3>
            <p>#id</p>
        </div>
        <div className = "sidebar__profileIcons">
                    <MicIcon />
                    <HeadSetIcon />
                    <SettingsIcon />
        </div>  
        </div>
        </div>
    </>
);
}