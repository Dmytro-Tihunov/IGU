import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Headerlogo() {
  return (
    <div className="headerLogoSection">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="logoPart">
              <img
                src="./img/headerLogo.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Headerlogo;
