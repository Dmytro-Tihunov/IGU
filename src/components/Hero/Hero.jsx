import React from "react";
import Searchbox from "../MainComp/Searchbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function Hero() {
  return (
    <section className="heroSection">
      <div className="container-fluid">
        <div className="row heroRow">
          <div className="col-12 col-lg-6 col1">
            <div className="content">
              <h1 className="sectionTitle">
                1500+ AI Tools To <br /> Explore All Your <br />
                Needs! 🤪
              </h1>
              <h5 className="subTitle">Filter by Price, Category + More</h5>
              <p className="text">
                Increase your potential with AI, it’s all here. We got you.
              </p>
              <Searchbox placeholder="Search here" />
              <div className="heroButton">
                <a href="#link" className="cta btn btn-primary">
                  Search
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col2">
            <div className="sectionImage">
              <img
                src="./img/heroImage.png"
                alt="heroImage"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
