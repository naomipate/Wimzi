import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Nav from "./Componets/Nav/Nav";
import BackgroundImg from "./Componets/BackgroundImg/BackgroundImg";
import Layout from "./Componets/Layout/Layout";
import "./App.css";
import {getImageById} from './API/API'

function App() {
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
    <div
      className="App"
    >
      <Router>
        <Layout>
          <Nav />
          <Routes>
            <Route path="/" element={<Home imageDesc={imageDesc} imgSrc={imgSrc} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
        <BackgroundImg imgSrc={imgSrc}/>
      </Router>
    </div>
  );
}

export default App;
