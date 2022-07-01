import React,{useState,useEffect} from 'react'
import axios from 'axios';
export const useAllAction=()=>{
    const [billInfo,setBillInfo]=useState([])
    const [dataCount,setDataCount]=useState(null)
    const [totalPayment,setTotalpayment]=useState(0)
    const loadBills=(pageNumber)=>{
            let url=`https://nameless-wave-74906.herokuapp.com/api/billing-list?page=${pageNumber}&pageSize=10`
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setBillInfo(data.getAllBills)
                setDataCount(data.dataCount)
            })
    }
    // remove billing
    const removeBill=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`https://nameless-wave-74906.herokuapp.com/api/delete-billing/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
      const remainingItems=billInfo?.filter(bill=>!bill._id==_id)
      // handleShow()
      setBillInfo(remainingItems)
         }});
        }
       }
    // total Amount
useEffect(()=>{
    const total=billInfo?.reduce((sum,bill)=>sum+parseInt(bill.ammount),0)
    setTotalpayment(total)
  },[billInfo])
    return{loadBills,billInfo,setBillInfo,removeBill,totalPayment,dataCount}
}