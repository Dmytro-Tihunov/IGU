import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hot.css";
import Button from "./Button";
import { supabase } from "../../lib/api";
import useStore from "../../store";

function Hot() {
  const [isLoading, setIsLoading] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("All");
  const { subcategories } = useStore();
  const { tools } = useStore();

  const Seasons = {
    "Social Media": "Social",
    "Business and Finance": "Business",
    "Lifestyle and Health": "Lifestyle",
    "Audio and Video": "Video",
    "Education and Productivity": "Education",
    Coding: "Coding",
    "Lifestyle and Health": "Lifestyle",
    "Art, Design and Graphics": "Design",
    Entertainment: "Entertainment",
    Writing: "Writing",
    "Data Analysis and Management": "Data",
    "Fashion and Shopping": "Fashion",
  };

  const cleanUrl = (url) => {
    return url.replace(/:\/\//g, ".");
  };

  function handleClick(category) {
    setChosenCategory(category);
  }

  const randomTools = tools
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
    <ContentLoader speed={2} width={1296} height={473} viewBox="0 0 1296 473">
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
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(https://wwcbzpqlwqiojdnspqoi.supabase.co/storage/v1/object/public/SS/${cleanUrl(
                              tool.URL
                            )}.png)`,
                          }}
                        ></div>
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
        {subcategories.map((category) => (
          <Button
            handleClick={handleClick}
            key={category.name}
            type={category.name}
            currentCat={chosenCategory}
            label={Seasons[category.name]}
          />
        ))}
      </div>
    </section>
  );
}

export default Hot;
