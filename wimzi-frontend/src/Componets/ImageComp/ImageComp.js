import React from 'react'
import "./ImageComp.css"; 


function ImageComp() {
  return (
<div className="card" style={{width: "450px"}}>
  <img src="https://d7hftxdivxxvm.cloudfront.net/?height=528&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpoQnSnAxjupoTUtNALBq8g%2Fnormalized.jpg&width=800" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  )
}

export default ImageComp