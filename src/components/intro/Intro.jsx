import React from 'react'
import "./style.css";

export default function Intro() {
  return (
    <div className="container myname">
     <div className="row">
     <div className="hii">
                    Hi, my name is 
                </div>
                <div className="name">
                    Jemin Sosaliya
                </div>
                <div className="buld">
                    I build things for the Android, ios and web.
                </div><br /><br />
                <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, unde enim. Odio quas voluptatum culpa, dolorum rem temporibus. Unde iste expedita a, dolor cum veritatis voluptas blanditiis nihil mollitia fugit. 
                </div>
     </div>
     <div className="row">
        <div className="col get">
        <button className="btn btn-outline-success">Get In Touch</button>
        </div>
     </div>
    </div>
  )
}
