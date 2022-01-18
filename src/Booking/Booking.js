import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`https://afternoon-dawn-04949.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const { service, img, cost, detail } = booking;
  const { user } = useAuth();
  const { email, displayName } = user;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const date = new Date();
    const localDate = date.toLocaleDateString();
    data.orderDate = localDate;
    data.status = "pending";
    console.log(data);

axios.post("https://afternoon-dawn-04949.herokuapp.com/booking",data)
.then(res=>{
    if(res.status===200){
        Swal.fire("Successfully Booked");
        reset();
    }
})

  };
  return (
    <div className="purchase">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12">
          <div className="prodDetail">
            <img src={img} alt="image"></img>
            <h3>{service}</h3>
            {/* <h5>
              <b>Original Model: {origin}</b>
            </h5> */}
            <h5>
              <b>Fixed Price: {cost}TK</b>
            </h5>
            <p className="detail">
              <b>{detail}</b>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 booking-form">
          <h2 className="text-center">Fill form and Booking</h2>
          {img && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={displayName}
                required
                placeholder="enter your name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <input
                value={email}
                required
                // placeholder="enter your email"
                {...register("email")}
              />
              <input
                required
                placeholder="enter your address"
                {...register("address")}
              />
              <input required value={img} {...register("image")} />
              <input
                required
                placeholder="enter your contact number"
                type="number"
                {...register("phone")}
              />
              <input
                required
                value={service}
                // placeholder="enter Customize bike name"
                {...register("serviceName")}
              />
              <input
                required
                // placeholder="enter advance amount"
                value={cost}
                type="number"
                {...register("charge")}
              />
              <br />

              <input className="submitBtnBook" type="submit" value="Order" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
