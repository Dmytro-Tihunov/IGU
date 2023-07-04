import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hot.css";
import Button from "./Button";
import { supabase } from "../../lib/api";

function Hot() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    getProjects();
    getCategories();
  }, []);

  // Get all tools
  async function getProjects() {
    setIsLoading(true);
    const { data, error } = await supabase.from("Tools").select();
    if (error) {
      console.log(error, "Fetch Supabase error");
      setIsLoading(false);
    } else {
      setData(data);
    }
    setIsLoading(false);
  }

  // Get all categories
  async function getCategories() {
    const { data: categories } = await supabase
      .from("Tools")
      .select("Category");
    // Remove duplicates
    const uniqueCategories = [
      ...new Set(categories.map((item) => item.Category)),
    ];
    setCategories(uniqueCategories);
  }

  function handleClick(category) {
    setChosenCategory(category);
  }

  const randomTools = data
    .filter((item) => {
      if (chosenCategory === "All") {
        return true;
      } else {
        return item.Category === chosenCategory;
      }
    })
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  const MyLoader = () => (
    <ContentLoader 
    speed={2}
    width={1296}
    height={473}
    viewBox="0 0 1296 473"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="473" /> 
  </ContentLoader>
  );

  return (
    <section className="hotSection">
      <Container>
        <Row>
          <Col className="col-12">
            <h1 className="sectionTitle">IGU’s HOT 3 🔥</h1>
          </Col>

          <Col className="col-12">
            {isLoading ? (
              <MyLoader />
            ) : (
              <Carousel>
                {randomTools.map((tool) => (
                  <Carousel.Item key={tool.Name}>
                    <div className="row carouselRow">
                      <div className="col-12 text-center">
                        <a href={tool.URL} className="cta btn btn-primary">
                          {tool.Name}
                        </a>
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
                          <h1 className="number">{tool.Name}</h1>
                          <p className="text">{tool.Description}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
      </Container>
      <div className="category-button">
        {categories.map((category) => (
          <Button
            handleClick={handleClick}
            key={category}
            currentCat={chosenCategory}
            label={category}
          />
        ))}
      </div>
    </section>
  );
}

export default Hot;
