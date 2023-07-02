import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Img/logo.png";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';


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
            <Nav.Link href="#features" id="nav-item">Home</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown" id="nav-item" >
              <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Sponsors
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                 How it works 
              </NavDropdown.Item>
            </NavDropdown>
	  <Nav.Link href="#features"  id="nav-item">News</Nav.Link>
	    <Nav.Link href="#features"  id="nav-item">Contact Us</Nav.Link>
          </Nav>

	     <Nav>
	<NavDropdown title="en" id="navbarScrollingDropdown" id="nav-item" >
              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                 <NavDropdown.Item href="#action3">Hausa</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Yoruba</NavDropdown.Item>
                       <NavDropdown.Item href="#action3">Igbo</NavDropdown.Item>
                          <NavDropdown.Item href="#action3">French</NavDropdown.Item>
             
            </NavDropdown>


          <Form className="d-flex">
           <Button variant="primary" size="xxl" className="button" >Portal</Button>{' '}
          </Form>
	</Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
