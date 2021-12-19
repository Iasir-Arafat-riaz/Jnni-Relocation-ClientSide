import Aos from 'aos';
import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SingleServices.css"
import "aos/dist/aos.css";

const SingleService = ({singleService}) => {
    const{serviceId,service,detail,cost,img,_id}=singleService;
    const navigate =useNavigate()
    const bookingNow=()=>{
navigate(`/Service/${_id}`)
    }
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    return (
      <div  className='p-2'>
        <Col>
          <Card className='' data-aos="flip-right">
            <Card.Img className='' variant="top" src={img} />
            <Card.Body>
              <Card.Title data-aos="fade-down" className="text-center">{service}</Card.Title>
              <Card.Text>
               {detail}
              </Card.Text>
            </Card.Body>
            <button  onClick={bookingNow} className='homeBook'><i class="fas fa-shipping-fast"></i> Book Now</button>
          </Card>
        </Col>
      </div>
    );
};

export default SingleService;