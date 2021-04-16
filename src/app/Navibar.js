import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navibar = () => {
  return (
    <Navbar bg="light" expand="sm" fixed="top" id="navbar">
      <Navbar.Brand href="#home-anchor">Alejandro</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#projects-anchor">Projects</Nav.Link>
          <Nav.Link href="#contact-anchor">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
