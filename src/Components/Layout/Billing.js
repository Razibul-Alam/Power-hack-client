import React,{useState,useEffect} from 'react';
import { Container,Table,Button,InputGroup,FormControl } from 'react-bootstrap';
import axios from'axios';
import {Pagination,Dropdown} from 'react-bootstrap';

import { useAllAction } from '../../Custom-Hook/useAllActions';
import AddEditBilling from './AddEditBilling';
import { useFunctionality } from './../../Custom-Hook/useFunctionality';
import { useNavigate } from 'react-router-dom';
const Billing = () => {
  const navigate=useNavigate()
  const {loadBills,billInfo,setBillInfo,removeBill,dataCount,user}=useFunctionality()
  const [singleBill,setSingleBill]=useState({});
  const [pageNumber,setPageNumber]=useState(0);
  const [show, setShow] = useState(false);  
  const [isUpdate,setIsUpdate]=useState(false);
  const[category,setCategory]=useState('name');
  const [searchText,setSearchText]=useState('')

            const handleClose = () =>{
              if(isUpdate==true){
                setIsUpdate(false)
              }
              setShow(false)
            }
// load data
useEffect(()=>{
  loadBills(pageNumber,category,searchText)
},[billInfo,category])
           
// create bill button 
const handleCreateBill=()=>{
  console.log(user?.name)
  if(user.name){
    setShow(true)
  }else{
    navigate('/login')
  }
}

//  bill edit
const editBill=(id)=>{
  axios.get(`https://nameless-wave-74906.herokuapp.com/api/single-billing/${id}`)
  .then(data=>setSingleBill(data?.data))
  setShow(true)
  setIsUpdate(true)
}
//serch text recieve
const handleSearch=(e)=>{
  setSearchText(e.target.value)
} 

// pagination number 
const count=Math.ceil(dataCount/10)
let paginationCount=[...Array(count).keys()]
console.log(category,searchText)
    return (
      <>
      <AddEditBilling handleClose={handleClose} show={show} setShow={setShow} isUpdate={isUpdate} singleInfo={singleBill} setIsUpdate={setIsUpdate}/>
        <Container className='mt-5'>
        <div className='mb-2 d-flex justify-content-between bg-secondary py-2'>
            <InputGroup className=" w-50 ms-2">
    <FormControl
    onChange={handleSearch}
      placeholder="search here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <div>
            <Dropdown className='ms-3 pb-3'>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    {category.toLocaleUpperCase()}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {['name','email','phone'].map(category=><Dropdown.Item onClick={()=>setCategory(category)}>{category}</Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>        
        </div>
  </InputGroup>
            
            <Button className='me-2' variant="primary" size="lg" onClick={()=>handleCreateBill()}>Add New Bill</Button>
          </div>
        <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {billInfo?.map(bill=><tr>
            <td>{bill._id}</td>
            <td>{bill.name}</td>
            <td>{bill.email}</td>
            <td>{bill.phone}</td>
            <td>{bill.ammount}</td>
            <td><span className='text-danger' onClick={()=>removeBill(bill._id)}>Delete</span><span className='ms-3 text-primary' onClick={()=>editBill(bill._id)}>Edit</span></td>
          </tr>)}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'>
      <Pagination>
      <Pagination.Prev />
     {paginationCount.map(page=> <Pagination.Item onClick={()=>setPageNumber(page)}>{page+1}</Pagination.Item>)}
      <Pagination.Next />
    </Pagination>
      </div>
      </Container>
      </>
    );
};

export default Billing;