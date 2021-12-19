import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SingleServices.css"

const SingleService = ({singleService}) => {
    const{serviceId,service,detail,cost,img,_id}=singleService;
    const navigate =useNavigate()
    const bookingNow=()=>{
navigate(`/Service/${_id}`)
    }
    return (
      <div className='p-2'>
        <Col>
          <Card className=''>
            <Card.Img className='' variant="top" src={img} />
            <Card.Body>
              <Card.Title className="text-center">{service}</Card.Title>
              <Card.Text>
               {detail}
              </Card.Text>
            </Card.Body>
            <button onClick={bookingNow} className='homeBook'>Book Now</button>
          </Card>
        </Col>
      </div>
    );
};

export default SingleService;