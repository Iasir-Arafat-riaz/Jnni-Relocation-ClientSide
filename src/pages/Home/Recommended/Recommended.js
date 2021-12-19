import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService/SingleService";

const Recommended = () => {
  const [recomended, setRecomended] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2021/services")
      .then((res) => res.json())
      .then((data) => setRecomended(data));
  }, []);

  const slice = recomended.slice(0, 4);

  return (
    <div className="m-4">
      <h1 className="text-center">Recommended services here</h1>
      <div className="row mt-5">
        <div className="col-md-8 col-sm-12">
          <Row xs={1} md={2} className="g-4">
            {slice.map((service) => (
              <SingleService key={service.serviceId} singleService={service}></SingleService>
            ))}
          </Row>
        </div>

        <div className="col-md-4 col-sm-12">
          <h4>
            Planning to shift your house to a new location? Looking for
            hassle-free house shifting services in Bangladesh near you for safe
            relocation? Don’t worry. Welcome To India Packers And Movers Company
            India Packers and Movers Group is a company with a very sound
            reputation in the packers and movers industry. We are a local movers
            company is an illustrious one and is dedicated to providing our
            customers with dependable, world-class, and perfect solutions to
            their entire satisfaction. We have been offering packers and movers
            services for over a decade and doing our best to win the trust and
            confidence of our customers. By choosing our quality relocation
            services, you can rest assured that our services would deliver a
            memorable experience to you. Our services are available for
            businesses, corporate, home, residential, commercial and office
            services. Feel free to hire us at India Packers Group and ensure to
            move your goods to a new location in a stress-free way. At India
            Packers Group, we have come a long way in serving our clients in the
            best way.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
