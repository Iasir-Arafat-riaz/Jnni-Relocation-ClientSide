import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import SingleReview from "./SingleReview/SingleReview";

const ReviewUi = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-dawn-04949.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  const slickSlider = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="common-header text-center common">
        {" "}
        <b>
          <i>Customer Review</i>
        </b>
      </h2>
      <Row  className="g-4 m-3">
        <Slider {...slickSlider}>
          {reviews.map((review, index) => (
            <SingleReview review={review} key={index}></SingleReview>
          ))}
        </Slider>
      </Row>
    </div>
  );
};

export default ReviewUi;
