import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css"

const Service = ({singleService}) =>{
    const{serviceId,service,detail,cost,img,_id}=singleService;
    const navigate=useNavigate()
    const serviceBooking=()=>{
        navigate(`/Service/${_id}`)
    }
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-center ">{service}</Card.Title>
            <h6 className="text-center">Starting price {cost}TK</h6>
            <Card.Text className="serviceTxt">
             {detail}
            </Card.Text>
          </Card.Body>
          <button onClick={serviceBooking} className="serviceBook"><b>Book Now</b></button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
