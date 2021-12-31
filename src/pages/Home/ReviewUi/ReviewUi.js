import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';

const ReviewUi = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
fetch("https://afternoon-dawn-04949.herokuapp.com/reviews")
.then(res=>res.json())
.then(data=>setReviews(data))
    },[])
    console.log(reviews);
    return (
        <div>
            <h2 className="common-header text-center"> Customer Review</h2>
            <Row xs={1} md={5} className="g-4 m-3">
          {reviews.map((review, index) => (
            <SingleReview review={review} key={index}></SingleReview>
          ))}
        </Row>

        
        </div>
    );
};

export default ReviewUi;