import React from 'react';
import "./style.css";
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default function Where() {
  return (
    <div className="container where">
        <div className="row ">
           <div className="col">
           <span className="number">
                02.
            </span>
            <span className="about">
                 Where I've Worked
            </span>
            <hr style={{ height: '80px' }} />
           </div>
        </div>
        <div className="row">
           <div className="col">
           <div className="icone-2">
           <div className="Vr"></div>
           <img src="icone-1.jpeg" alt="" />
           <div className="DEV">
           <div className="back">
           <LogoDevIcon sx={{ fontSize: 50 }}  />
           </div>
           </div>
           </div>
           </div>
           <div className="col-10">
            <div className="pelo">
            <span className="title">Freelancer - Flutter | Dart Mobile App Developer | UI - UX Designer</span> <br />
            <span className="dis">Flutter Developer and experienced programmer with an extensive history of designing and coding solutions. Skilled in Google's Flutter/Dart, Firebase App and Web development on a global scale. If you are looking for someone that you can trust that will complete your app on time and on budget, then please contact me. I have been developing software for 1+ years and take pride in everything I do. Oct-2019 to Presents</span>
            </div>
            <div className="bijo">
                <span className="title">
                Flutter Developer at LogiksHub | Surat
                </span> <br />
                <span className="dis">
                Building world class Mobile apps <br />
                2019-Present
                </span>
            </div>
           </div>
        </div>
    </div>
  )
}
