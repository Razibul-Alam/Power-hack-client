import React,{useState,useEffect} from 'react'
import axios from 'axios';
export const useAllAction=()=>{
    const [billInfo,setBillInfo]=useState([])
    const [dataCount,setDataCount]=useState(null)
    const [totalPayment,setTotalpayment]=useState(0)
    const [user,setUser]=useState({})
    const loadBills=(pageNumber,category,searchText)=>{
        console.log(searchText)
            let url=`https://nameless-wave-74906.herokuapp.com/api/billing-list?page=${pageNumber}&category=${category}&searchText=${searchText}`
            axios.get(url,{headers:{jtoken:`Bearer ${user?.accesToken}`}})
            .then(data=>{
                setBillInfo(data.data.getAllBills)
                setDataCount(data.data.dataCount)
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
    return{loadBills,billInfo,setBillInfo,removeBill,totalPayment,dataCount,user,setUser}
}