import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; // Assuming you're using react-icons for the arrow icon

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname !== '/';

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Gratitude Journal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
              <Nav.Link as={Link} to="/entries" className={location.pathname === '/entries' ? 'active' : ''}>Entries</Nav.Link>
              {/* Add more Nav.Link for different sections */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              {/* Add more user-related options */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showBackButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleGoBack}
        >
          <FiArrowLeft size={44} /> {/* Adjust the size as needed */}
        </div>
      )}
    </>
  );
};

export default Header;