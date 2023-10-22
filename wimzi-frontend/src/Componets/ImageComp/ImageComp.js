import { useState, useEffect } from "react";
import "./ImageComp.css";
import { getImageById } from "../../API/API";

function ImageComp() {
  const [imageDesc, setImageDesc] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  async function fetchImage() {
    const randImg = Math.floor(Math.random() * 50);
    // console.log(randImg);
    let data = await getImageById(randImg);
    // console.log(data);
    // console.log(data.data[0].image_id);
    setImgSrc(
      `https://www.artic.edu/iiif/2/${
        data.data[0].image_id
          ? data.data[0].image_id
          : "2ffde7b6-d57c-eba4-c6af-9f4e1dc91d72"
      }/full/843,/0/default.jpg`
    );
    // console.log(data.data[0].title);
    setImageDesc(data.data[0].title);
  }

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
