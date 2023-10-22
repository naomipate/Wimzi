import { useState, useEffect } from "react";
import "./ImageComp.css";
import { getImageById } from "../../API/API";

function ImageComp({imageDesc, imgSrc}) {


  return (
    <div className="card" style={{ width: "450px" }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{imageDesc}</p>
      </div>
    </div>
  );
}

export default ImageComp;
