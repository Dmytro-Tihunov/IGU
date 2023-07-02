import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hot.css";
import Button from "./Button";

const categories = ["Writing", "Art", "Audio", "Video", "Coding", "Business", "Education", "Lifestyle", "Entertainment"];

function Hot() {
  return (
    <section className="hotSection">
      <Container>
        <Row>
          <Col className="col-12">
            <h1 className="sectionTitle">IGU’s HOT 3 🔥</h1>
          </Col>

          <Col className="col-12">
            <Carousel>
              <Carousel.Item>
                <div className="row carouselRow">
                  <div className="col-12 text-center">
                    <div className="cta btn btn-primary">UNCODY.COM</div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <img
                      src="/img/corouselImage.png"
                      alt="image1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="content">
                      <h1 className="number">#1</h1>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt quidem temporibus et sit eligendi at ducimus
                        repellat quam sint ipsa! <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam laboriosam suscipit est ad eveniet. Nobis.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row carouselRow">
                  <div className="col-12 text-center">
                    <div className="cta btn btn-primary">UNCODY.COM</div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <img
                      src="/img/corouselImage.png"
                      alt="image1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="content">
                      <h1 className="number">#2</h1>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt quidem temporibus et sit eligendi at ducimus
                        repellat quam sint ipsa! <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam laboriosam suscipit est ad eveniet. Nobis.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row carouselRow">
                  <div className="col-12 text-center">
                    <div className="cta btn btn-primary">UNCODY.COM</div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <img
                      src="/img/corouselImage.png"
                      alt="image1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="content">
                      <h1 className="number">#3</h1>
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt quidem temporibus et sit eligendi at ducimus
                        repellat quam sint ipsa! <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam laboriosam suscipit est ad eveniet. Nobis.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <div className="category-button"> 
        {categories.map(category => (
          <Button key={category} label={category}/>
        ))}
      </div>
    </section>
  );
}


export default Hot;
