import React from 'react'
import "./Instructions.css"; 

function Instructions() {
  return (

        <div className="card card-instructions border-info mb-3" 
        // style={{maxWidth: "18rem"}}
        >
    <div className="card-header">Instructions</div>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">This website is for artist who need a daily does of inspiration.
      Enjoy the art of the day. More info about the art is in the widget below. </p>
      <hr/>
      <p className="card-text"> Make reminders and have then easily imported into you google calender once you submit.</p>
    </div>
    </div> 
  )
}

export default Instructions