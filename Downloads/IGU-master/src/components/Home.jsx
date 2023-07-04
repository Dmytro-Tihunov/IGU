import React, { useRef } from "react";
import Hero from "./Hero/Hero";
import Hot from "./Hot/Hot";
import Categories from "./Category/Categories";
import Review from "./Review/Review";

function Home() {
  const resultRef = useRef(null);

  return (
    <div className="homePage">
      <Hero resultRef={resultRef} />
      <Hot />
      <Categories ref={resultRef} />
      <Review />
    </div>
  );
}

export default Home;
