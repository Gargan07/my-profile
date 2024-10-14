import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/navigation.css';

function Navigation() {
  return (
    <>
      <Navbar className='bg-color' variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/home" className="d-flex align-items-center mx-2 mx-md-3 fs-5 fw-bold nav-link-color">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="d-flex align-items-center mx-2 mx-md-3 fs-5 fw-bold nav-link-color">About</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="d-flex align-items-center mx-2 mx-md-3 fs-5 fw-bold nav-link-color">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="d-flex align-items-center mx-2 mx-md-3 fs-5 fw-bold nav-link-color">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
