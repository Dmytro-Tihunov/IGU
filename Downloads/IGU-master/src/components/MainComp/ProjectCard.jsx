import React, { useState } from "react";
import { Col } from "react-bootstrap";

function ProjectCard({title, description, subcategory, url }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortDescription = description.slice(0, 40); // change 100 to whatever number of characters you want to display initially

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  }

  return (
    <Col className="col-12 col-lg-3 d-flex justify-content-center align-items-center">
      <div className="cateCard">
        <div className="cardImage">
          <span>
            <i className="fa fa-bookmark"></i>
          </span>
          <img src="/img/cardImg.png" alt="cardImage" className="img-fluid" />
        </div>
        <div className="cardContent">
          <h5 className="cardTitle">{title}</h5>
          <p className="text">
            {showFullDescription ? description : `${shortDescription}...`}
            {description.length > 100 && <span onClick={toggleDescription} style={{fontWeight: 'bold', cursor: 'pointer'}}>{showFullDescription ? " Show Less" : " Load More"}</span>}
          </p>
          <p className="tags">{subcategory}</p>
          <div className="rate">
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>
            </div>
          </div>
          <div className="actionBtn">
            <a href={url} target="_blank" className="cta btn btn-primary">
              try now
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
