import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Nav from "./Componets/Nav/Nav";
import './App.css'

function App() {
  return (
    <div className="App"
    // style={{backgroundImage: `url(${'https://d7hftxdivxxvm.cloudfront.net/?height=528&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpoQnSnAxjupoTUtNALBq8g%2Fnormalized.jpg&width=800'})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundColor: '#FFFFFF50'
  // }}
  //------------------could not do the image background with opacity down 
    >
        <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
