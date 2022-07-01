import React,{useState,useEffect} from 'react';
import { Container,Table,Button } from 'react-bootstrap';
import CustomModal from './../Modal/CustomModal';
import axios from'axios';
import AddBilling from '../Billing/AddBilling';
const Billing = () => {
  const [singleBill,setSingleBill]=useState({});
  const [billInfo,setBillInfo]=useState([]);
  const [show, setShow] = useState(false);  
  const [isUpdate,setIsUpdate]=useState(false)
            const handleClose = () => setShow(false);

            // loading all billing info
            useEffect(()=>{
              let url='http://localhost:5000/allbills'
              fetch(url)
              .then(res=>res.json())
              .then(data=>setBillInfo(data))
          },[billInfo])
//  remove bill
const removeBill=(_id)=>{
  const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
  if(confirmDelete){
   axios.delete(`http://localhost:5000/removeBill/${_id}`)
   .then((result) =>{if(result.data.deletedCount>0){
const remainingItems=billInfo?.filter(bill=>!bill._id==_id)
// handleShow()
setBillInfo(remainingItems)
   }});
  }
 }

//  bill edit
const editBill=(id)=>{
  axios.get(`http://localhost:5000/singleid/${id}`)
  .then(data=>setSingleBill(data.data))
  setShow(true)
  setIsUpdate(true)
}

         console.log(singleBill) 
    return (
      <>
      <AddBilling handleClose={handleClose} show={show} setShow={setShow} isUpdate={isUpdate} singleInfo={singleBill}/>
        <Container>
        <Table striped bordered hover responsive>
        <thead>
        <tr className='mb-3'>
            <th colSpan={3}>
                <input type="search" name="" id="" />
            </th>
            <th><Button onClick={()=>setShow(true)}>Add New Bill</Button></th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Ammount</th>
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
            <td><span onClick={()=>removeBill(bill._id)}>Delete</span><span className='ms-2' onClick={()=>editBill(bill._id)}>Edit</span></td>
          </tr>)}
        </tbody>
      </Table>
      </Container>
      </>
    );
};

export default Billing;