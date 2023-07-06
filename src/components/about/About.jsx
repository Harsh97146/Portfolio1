import React from 'react'
import "./style.css"
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function About() {
  return (
    <div className="container first">
        <div className="row my">
           <div className="col">
           <span className="number">
                01.
            </span>
            <span className="about">
                About Me 
            </span>
            <hr style={{ height: '80px' }} />
           </div>
        </div>
        <div className="row">
            <div className="col">
            <div className="About">
          <div className="hello row">
           Hello! I'm Jemin, a Freelancer based in Surat, IN. 
           </div>
           <br />
           <div className="row">
           I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
           </div><br />
           <div className="row">
           Shortly currently, I am a part time freelancer where I work on a wide variety of interesting and meaningful projects on a daily basis.
           </div><br />
           <div className="row">
           Here are a few technologies I've been working with recently:
           </div>
           <div className="row my-5">
            <div className="col-4">
                <ul>
                <li><SkipNextIcon /><span>Dart</span></li>
                <li><SkipNextIcon /><span>Flutter</span></li>
                <li><SkipNextIcon /><span>Firebase</span></li>
                <li><SkipNextIcon /><span>Html & (S)css</span></li>
                <li><SkipNextIcon /><span>UI/UX (Adobe Xd)</span></li>
                </ul>
            </div>
            <div className="col-4">
                <ul>
                    <li><SkipNextIcon />C/C++, Java</li>
                    <li><SkipNextIcon />MYSQL</li>
                    <li><SkipNextIcon />Wordpress</li>
                    <li><SkipNextIcon />Shopify</li>
                    <li><SkipNextIcon />Git-Github</li>
                </ul>
            </div>
           </div>
          </div>
            </div>
            <div className="col fodo">
                <img src="Logo.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}
