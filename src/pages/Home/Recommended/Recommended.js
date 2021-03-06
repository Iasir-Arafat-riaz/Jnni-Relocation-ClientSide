import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService/SingleService";
import "./Recommended.css";
import Loading from "../../Shared/Loading/Loading";
const Recommended = () => {
  const [recomended, setRecomended] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    fetch("https://afternoon-dawn-04949.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setRecomended(data));
    setLoader(false);
  }, []);

  // const slice = recomended.slice(0, 4);
  console.log(loader);
  if (loader) {
    return <Loading />;
  }
  return (
    <div className="m-4">
      <h1 className="text-center common">
        <b>
          <i>Recommended services here</i>
        </b>
      </h1>
      <div className="row mt-5">
        <div className="col-md-8 col-sm-12">
          <Row xs={1} md={2} className="g-4">
            {recomended.map((service) => (
              <SingleService
                key={service.serviceId}
                singleService={service}
              ></SingleService>
            ))}
          </Row>
        </div>

        <div data-aos="fade-up" className="col-md-4 col-sm-12">
          <h4 className="recomendedDetails">
            Planning to shift your house to a new location? Looking for
            hassle-free house shifting services in Bangladesh near you for safe
            relocation? Don’t worry. Welcome To Jinni Relocation Company with a
            very sound reputation in the packers and movers industry. We are a
            local movers company is an illustrious one and is dedicated to
            providing our customers with dependable, world-class, and perfect
            solutions to their entire satisfaction. We have been offering
            packers and movers services for over a decade and doing our best to
            win the trust and confidence of our customers. By choosing our
            quality relocation services, you can rest assured that our services
            would deliver a memorable experience to you. Our services are
            available for businesses, corporate, home, residential, commercial
            and office services. Feel free to hire us at India Packers Group and
            ensure to move your goods to a new location in a stress-free way. At
            India Packers Group, we have come a long way in serving our clients
            in the best way.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
