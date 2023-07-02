import React from "react";
import Hero from "./Hero/Hero";
import Hot from "./Hot/Hot";
import Categories from "./Category/Categories";
import Review from "./Review/Review";

function Home() {
  return (
    <div className="homePage">
      <Hero />
      <Hot />
      <Categories />
      <Review />
    </div>
  );
}

export default Home;
