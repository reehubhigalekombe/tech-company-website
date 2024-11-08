import React  from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Award from "./subpages/Award";
import About from "./subpages/About";
import Our from "./subpages/Our";
import Footer from "./component/Footer"
import Home from "./pages/Home";
import './App.css';
import Software from "./subpages/Software";
import Web from "./subpages/Web";
import It from "./subpages/It"
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Client from "./pages/Client";
import Navbar from './component/Navbar';
import Partnerships from "./pages/Partnerships";
function App() {
  const backgroundStyle ={
    backgroundImage: `url("assets/tech.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  }
  return (
    <div className="App" styles={backgroundStyle}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element = {<Home/>}/>
          <Route path="/company/about" exact  element = {<About/>}/>
          <Route path="/company/our" exact  element = {<Our/>}/>
          <Route path="/company/award" exact  element = {<Award/>}/>
          <Route path="/services/software"  exact element={<Software/>}/>
          <Route path="/services/web" exact element={<Web/>}/>
          <Route path="/services/it" exact element={<It/>}/>
          <Route path="/partnerships" exact element={<Partnerships/>}/>
          <Route path="/client" exact element={<Client/>}/>
          <Route path="/blog" exact element={<Blog/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
