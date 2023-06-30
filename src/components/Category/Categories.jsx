import React from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "../MainComp/Searchbox";
import ProjectCard from "../MainComp/ProjectCard";
import "./Categories.css";

function Categories() {
  return (
    <section className="ctegoriesSection">
      <Container fluid>
        <Row className="mainRow">
          <Col className="col-12">
            <div className="catHeader">
              <Searchbox placeholder="Search by name" />
              <div className="dropdownButtons">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Price
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <a href="#link" className="cta btn btn-primary">
                Search
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mainRow">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Row>
        <Row className="mainRow">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <Col>
            <div className="moreBtn">
              <a href="#link" className="cta btn btn-parimary odd">
                More ai tools
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
