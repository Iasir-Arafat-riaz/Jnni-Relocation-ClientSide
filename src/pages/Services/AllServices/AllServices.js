import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const AllServices = () => {
    const [services,setServices]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        fetch("https://afternoon-dawn-04949.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
        setLoad(false)
    },[services])
    if(load){return <h2 className='text-center'>Please Wait some time</h2>}
    return (
        <div className='m-4 p-3'>
            <h1 className='text-center common'> <b><i>OUR KEY SERVICES</i></b></h1>
            <Row xs={1} md={3} className="g-4">
            {services.map((service) => (
              <Service key={service.serviceId} singleService={service}></Service>
            ))}
          </Row>
        </div>
    );
};

export default AllServices;