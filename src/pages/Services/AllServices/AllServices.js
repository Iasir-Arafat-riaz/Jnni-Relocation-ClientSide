import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const AllServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch("http://localhost:2021/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='m-4 p-3'>
            <h1>Here are all services</h1>
            <Row xs={1} md={3} className="g-4">
            {services.map((service) => (
              <Service key={service.serviceId} singleService={service}></Service>
            ))}
          </Row>
        </div>
    );
};

export default AllServices;