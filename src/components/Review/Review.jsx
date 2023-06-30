import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewCard from "../MainComp/ReviewCard";
import "./Review.css";

function Review() {
  return (
    <section className="reviewSection">
      <Container>
        <Row>
          <Col className="col-12">
            <h1 className="sectionTitle">REVIEWS 🕵🏼‍♀️</h1>
          </Col>
        </Row>
        <Row className="cardRow">
          <Col className="col-12 col-lg-10">
            <Row>
              <ReviewCard
                Title="BLA.AI"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices "
              />
              <ReviewCard
                Title="BLA.IO"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices "
              />
              <ReviewCard
                Title="BLA.org"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mauris lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices "
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Review;
