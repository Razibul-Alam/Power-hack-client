import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAllAction } from './../../Custom-Hook/useAllActions';
const Header = () => {
  const{totalPayment}=useAllAction()
    return (
        <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>POWER-HACK</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-light'>
              Total Payment={totalPayment}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;