import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>POWER-HACK</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-light'>
              Total bill-0
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;