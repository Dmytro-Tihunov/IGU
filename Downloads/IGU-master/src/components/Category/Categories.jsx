import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "../MainComp/Searchbox";
import ProjectCard from "../MainComp/ProjectCard";
import "./Categories.css";
import { supabase } from '../../pages/SupabaseClient';

function Categories() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('Tools')
        .select()
        .limit(limit);

      if (error) {
        console.log(error, 'Fetch Supabase error')
      } else {
        setData(data);
      }
    })();
  }, [limit]);

  const loadMoreProjects = () => {
    setLimit(prevLimit => prevLimit + 20);
  };

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
        <Row className="mainRow">
  {data.map((item) => {
    return (
      <ProjectCard 
        key={item?.id}
        title={item?.Name} 
        description={item?.Description} 
        subcategory={item?.subcategory} 
        url={item?.URL}
      />
    );
  })}
</Row>
<Row className="mainRow">
  <Col>
    <div className="moreBtn">
      <button onClick={loadMoreProjects} className="cta btn btn-primary">
        Load more
      </button>
    </div>
  </Col>
</Row>
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
