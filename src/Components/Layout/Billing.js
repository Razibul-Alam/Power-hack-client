import React,{useState,useEffect} from 'react';
import { Container,Table,Button } from 'react-bootstrap';
import axios from'axios';
import AddEditBilling from '../Billing/AddEditBilling';
import { useAllAction } from '../../Custom-Hook/useAllActions';
const Billing = () => {
  // call custom hook
  const{loadBills,billInfo,setBillInfo,removeBill,totalPayment}=useAllAction()
  const [singleBill,setSingleBill]=useState({});
  const [show, setShow] = useState(false);  
  const [isUpdate,setIsUpdate]=useState(false)

            const handleClose = () => setShow(false);
useEffect(()=>{
  loadBills()
},[billInfo])
            // loading all billing info
          //   useEffect(()=>{
          //     let url='http://localhostt:5000/allbills'
          //     fetch(url)
          //     .then(res=>res.json())
          //     .then(data=>setBillInfo(data))
          // },[billInfo])


//  bill edit
const editBill=(id)=>{
  axios.get(`https://nameless-wave-74906.herokuapp.com//api/single-billing/${id}`)
  .then(data=>setSingleBill(data.data))
  setShow(true)
  setIsUpdate(true)
}

    return (
      <>
      <AddEditBilling handleClose={handleClose} show={show} setShow={setShow} isUpdate={isUpdate} singleInfo={singleBill}/>
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
            <td><span onClick={()=>removeBill(bill._id)}>Delete</span><span className='ms-2' onClick={()=>editBill(bill._id)}>Edit</span></td>
          </tr>)}
          <tr>Total={totalPayment}</tr>
        </tbody>
      </Table>
      </Container>
      </>
    );
};

export default Billing;