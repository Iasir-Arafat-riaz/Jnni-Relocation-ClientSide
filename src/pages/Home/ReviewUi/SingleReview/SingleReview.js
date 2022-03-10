import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import "./SingleReview.css";

const SingleReview = (props) => {
  const { name, email, rating, cmnt } = props.review;
  const comment = cmnt.slice(0, 40);
  const cmommentFig = `${comment}.....`;
  return (
    <>
      
        <Col className="m-2">
          <Card id="rev" className="singleReview">
            <Card.Body>
              <Card.Title>
                {" "}
                <h6>
                  <b>
                    <FontAwesomeIcon icon={faUser} /> {name}
                  </b>
                </h6>
              </Card.Title>

              <small> {email}</small>
              <Card.Text>
                <p>
                  <i class="far fa-comment"></i> {cmommentFig}
                </p>
              </Card.Text>

              {rating === 5 ? (
                <div className="icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              ) : rating < 5 && rating >= 4 ? (
                <div>
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              ) : rating < 4 && rating >= 3 ? (
                <div>
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              ) : rating < 3 && rating >= 2 ? (
                <div>
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon className="icons" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </>
    
  );
};

export default SingleReview;
