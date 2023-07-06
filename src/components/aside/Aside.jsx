import React from 'react'
import "./style.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Aside() {
  return (
    <div className="aside container-fluid ">
      <aside>
        <div className="icone">
       <div className="git"> <GitHubIcon color="white" /></div>
        <div className="git"><LinkedInIcon color="white" /></div>
        <div className="git"><CallIcon color="white" /></div>
        <div className="git"><EmailIcon color="white" /></div>
        </div>
      </aside>
    </div>
  )
}
