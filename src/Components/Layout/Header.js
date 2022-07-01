import React,{useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAllAction } from './../../Custom-Hook/useAllActions';
const Header = () => {
  const[payment,setPayment]=useState(0)
  const{billInfo}=useAllAction()
  console.log(billInfo)
      // total Amount
useEffect(()=>{
  const total=billInfo?.reduce((sum,bill)=>sum+parseInt(bill.ammount),0)
  setPayment(total)
},[])
  
    return (
        <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>POWER-HACK</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-light'>
              <h5 className='text-light'>Total Payment={payment}</h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;