import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from "react";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import { Github } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, seScolled] = useState(false);

    useEffect(() => {
        const onScroll = ()  => {
            if(window.scrollY > 50) {
                seScolled(true);
            }
            else {
                seScolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
  return(
  <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home"> <img src={logo} alt="logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggle-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
          <Nav.Link href="#project" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projetos</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/daniel-ferreira-a8658524a/" target='blank'><img src={navIcon1} alt=""/> </a>
                <a href="https://wa.me/987751591" target='blank'><img src={navIcon2} alt="" target='blank'/> </a>
                <a href='https://www.youtube.com/@DanielGamergamer' target='blank'><img src={navIcon3} alt=""/> </a>
            </div>
            <button className='vvd' onClick={() => {
               window.open("https://github.com/Daniel-Ferreira-Adonai", '_blank', 'noopener,noreferrer');
            }}><span> Github <Github size={25} color="currentColor" className='github' /></span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  )
  
}