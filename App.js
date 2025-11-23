import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter, useLocation } from "react-router-dom";
import './App.css';
import Header from "./comp/Header";
import About from "./comp/About";
import Contact from "./comp/Contact";
import Home from './comp/Home';
import Footer from './comp/Footer';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
