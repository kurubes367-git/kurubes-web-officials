import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
export default function Header() {
  const navigate = useNavigate();
  return (
    <div  >
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PA KURUBES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="me-5" onClick={()=>navigate("/Home")}>Home</Nav.Link>
            <Nav.Link href="#features" className="me-5" onClick={()=>navigate("/About")}>About</Nav.Link>
            <Nav.Link href="#pricing" className="me-5" onClick={()=>navigate("/Contact")}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="marquee-container bg-dark-subtle py-2">
        <h2 className="marquee text-dark" >
          <b>PA”KURUBES” LOGISTICS & INVESTMENT COMPANY LTD</b>
        </h2>
      </div>
      <ul style={{ display: "flex", justifyContent: "center", gap: "40px", listStyleType: "disc", paddingLeft: "40px" }} className="mt-4">
        <b><li>LOGISTICS</li></b>
        <b><li>GENERAL SUPPLIES</li></b>
        <b><li>AGRO BUSINESS</li></b>
        <b><li>TRANSPORT</li></b>
        <b><li>WATER DRILLING</li></b>
      </ul>
    </div>
  )
}
