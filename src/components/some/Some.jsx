import React from 'react'
import "./style.css"

export default function Some() {
  return (
    <div className="container thired">
      <div className="row my">
           <div className="col">
           <span className="number">
                03.
            </span>
            <span className="about">
                Some Things I've Built 
            </span>
            <hr style={{ height: '80px' }} />
           </div>
           <div className="row my-3">
            <div className="col-8"></div>
            <div className="col-4  find">
              <div className="title">
              Find The Match
              </div>
            </div>
            <div className="row">
               <div className="col-8"></div>
               <div className="col-4">
                <div className="cord">
                <br />
                <br />
            A japan's card game. The purpose of this project is to Learn Flutter complex UI Design.
                </div>
               </div>
            </div>
           <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
            <div className="find2">
            <ul>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Flutter Ui</li>
            </ul>
            </div>
            </div>
           </div>
           </div>
        </div>
    </div>
  )
}
