import React from "react";
import Lists from "../Lists/Lists";
import ImageComp from "../ImageComp/ImageComp";
import Instructions from "../Instructions/Instructions";
import "./Home.css";

function Home({ imageDesc, imgSrc }) {
  return (
    <div
      className="home"
      // style={{backgroundImage: `url(${'https://d7hftxdivxxvm.cloudfront.net/?height=528&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpoQnSnAxjupoTUtNALBq8g%2Fnormalized.jpg&width=800'})`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover"}}
      //------------------could not do the image background with opacity down
    >
      <Lists />
      <div>
        <Instructions />
        <ImageComp />
      </div>
    </div>
  );
}

export default Home;
