import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" bg="transparent">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
              <Nav className="me-auto">
                <Nav.Link href="#home">About me</Nav.Link>
                <Nav.Link href="#features">Work Experience</Nav.Link>
                <Nav.Link href="#pricing">Certifications</Nav.Link>
                <Nav.Link href="#pricing">Skills</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>

          <NavDropdown variant="light" title="EN" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">CZ</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

      {/* 
      <Navbar bg="transparent">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="" />
          </Navbar.Brand>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="#home">About me</Nav.Link>
              <Nav.Link href="#features">Work Experience</Nav.Link>
              <Nav.Link href="#pricing">Certifications</Nav.Link>
              <Nav.Link href="#pricing">Skills</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </div>
          <div style={{ color: "white" }}>EN</div>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Menu;
