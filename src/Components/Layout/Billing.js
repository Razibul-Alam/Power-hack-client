import React,{useState,useEffect} from 'react';
import { Container,Table,Button } from 'react-bootstrap';
import axios from'axios';
import Pagination from 'react-bootstrap/Pagination';
import AddEditBilling from '../Billing/AddEditBilling';
import { useAllAction } from '../../Custom-Hook/useAllActions';
const Billing = () => {
  // call custom hook
  const{loadBills,billInfo,setBillInfo,removeBill,totalPayment,dataCount}=useAllAction()
  const [singleBill,setSingleBill]=useState({});
  const [pageNumber,setPageNumber]=useState(0);
  const [show, setShow] = useState(false);  
  const [isUpdate,setIsUpdate]=useState(false)

            const handleClose = () =>{
              if(isUpdate==true){
                setIsUpdate(false)
              }
              setShow(false)
            }
useEffect(()=>{
  loadBills(pageNumber)
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
  axios.get(`https://nameless-wave-74906.herokuapp.com/api/single-billing/${id}`)
  .then(data=>setSingleBill(data.data))
  setShow(true)
  setIsUpdate(true)
}

const count=Math.ceil(dataCount/10)
let paginationCount=[...Array(count).keys()]
console.log(pageNumber)
    return (
      <>
      <AddEditBilling handleClose={handleClose} show={show} setShow={setShow} isUpdate={isUpdate} singleInfo={singleBill} setIsUpdate={setIsUpdate}/>
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