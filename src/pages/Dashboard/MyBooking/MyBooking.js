import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import "./MyBooking.css"

const MyBooking = () => {
    const [myBooking, setMyBooking]=useState([])
    const {user}=useAuth()
    useEffect(()=>{
        fetch("https://afternoon-dawn-04949.herokuapp.com/booking")
        .then(res=>res.json())
        .then(data=>setMyBooking(data))
    },[])
const onlyMyBooking = myBooking.filter(booking=>booking.email==user.email)
console.log(onlyMyBooking);

const cancelOrder = (id) => {
    const confirmation = window.confirm("Are you sure delete this order");
    if (confirmation) {
      fetch(`https://afternoon-dawn-04949.herokuapp.com/booking/${id}`, { method: "delete" })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
         if(data.deletedCount){
             const remainingOrders = onlyMyBooking.filter(rest=>rest._id!==id);
             console.log(remainingOrders)
             setMyBooking(remainingOrders)
            
         }
        });
    }
  };

    return (
        <div className="only-My-Order">
      <h2 className="my-order-header"><b>Here Show Your Confirmed Order</b></h2>
      <div className="myOrder-Div ">
          {onlyMyBooking.map((orderInfo) => (
            <div className="my-order" key={orderInfo._id}>
              <div className='text-center'>
                  <img  width={200} src={orderInfo.image} alt="image" />
                <h6>Name:{orderInfo.name}</h6>
                <p>Email : {orderInfo.email}</p>
                <h6>Address: {orderInfo.address}</h6>
                <h6>Contact No: {orderInfo?.phone}</h6>
                <h6>Ordered Custom Bike: {orderInfo.serviceName}</h6>
                <h6> Total Advance: {orderInfo.charge}TK</h6>
                <h6> Order placed: {orderInfo.orderDate}</h6>
                <h6>Order Status:<b>{!orderInfo.status?"confirm":orderInfo.status}</b></h6>
                <button onClick={()=>cancelOrder(orderInfo._id)} className="btn btn-danger mt-3">Remove Order</button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
    );
};

export default MyBooking;