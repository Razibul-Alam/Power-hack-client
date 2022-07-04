import React,{useEffect,useState} from 'react';
import {Container,Navbar } from 'react-bootstrap';
import { useFunctionality } from './../../Custom-Hook/useFunctionality';
const Header = () => {
  const{totalPayment}=useFunctionality()
    return (
        <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand href="" className='text-light' >Power-Hack</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-light'>
              <h5 className='text-light'>Total Payment={totalPayment}</h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;