import React, { useEffect } from 'react'
import './Verify.css'
import {  useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Verify = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url+"/api/order/Verify",{success,orderId});
    if (response.data.success){
        navigate("/myorders");
    }
    else {
        navigate("/")
    }
}


useEffect(()=>{
    verifyPayment();
},[])
  

  return (
    <div className='Verify'>
        <div className="spinner"></div>
    </div>
  )

  
}

export default Verify
