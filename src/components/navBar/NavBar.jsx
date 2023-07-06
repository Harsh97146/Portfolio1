import React from 'react';
import "./style.css"
import CloudIcon from '@mui/icons-material/Cloud';

export default function NavBar() {
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col logo">
            <CloudIcon color="primary" sx={{ fontSize: 60 }} />
        </div>
        <div className="col">
            <div className="row">
                <div className="col harsh">
                    About
                </div>
                <div className="col harsh">
                    Experience
                </div>
                <div className="col harsh">
                    Project
                </div>
                <div className="col harsh">
                    Contact Us
                </div>
                <div className="col harsh">
                    <button className="btn btn-outline-success">Resume</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
