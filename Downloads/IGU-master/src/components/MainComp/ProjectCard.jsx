import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard() {
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
          <h5 className="cardTitle">BLA.AI</h5>
          <p className="text">
            Bla.ai is an advanced AI tool that automates tasks, analyzes data,
            and generates insights for businesses to boost productivity and make
            data-driven decisions.
          </p>
          <p className="tags">#AItool #Automation #DataAnalysis </p>

          <div class="rate">
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
          </div>

          <div className="actionBtn">
            <a href="#link" className="cta btn btn-primary">
              try now
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
