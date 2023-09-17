import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Menu = () => {
  return (
    <>
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
      </Navbar>
    </>
  );
};

export default Menu;
