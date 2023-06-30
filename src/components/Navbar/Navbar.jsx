import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Img/logo.png";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
	  <Navbar.Brand href="#home" className="logo">
            <img
              alt=""
             src={logo} 
              width="40%"
              height="40%"
              className="d-inline-block align-top"
            />{' '}
	  <span className="textLogo"> Jigawa State <br /> Government</span>
         
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

	
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
    <Nav className="me-auto" >
            <Nav.Link id="nav-item" to="/about"> Home</Nav.Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown"  id="nav-item">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
	  <Nav.Link href="#features"  id="nav-item">News</Nav.Link>
	    <Nav.Link href="#features"  id="nav-item">Contact Us</Nav.Link>
          </Nav>

	     <Nav>
	<NavDropdown title="en" id="navbarScrollingDropdown"  id="nav-item">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
             
            </NavDropdown>


          <Form className="d-flex">
           <Button variant="primary" size="xxl" className="button" >Primary</Button>{' '}
          </Form>
	</Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
