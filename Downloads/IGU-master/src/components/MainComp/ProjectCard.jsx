import React, { useState } from "react";
import { Col } from "react-bootstrap";

function ProjectCard({
  id,
  title,
  description,
  subcategory,
  favorites,
  handleChange,
  url,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortDescription = description.slice(0, 40); // change 100 to whatever number of characters you want to display initially

  const addFavorite = (id) => {
    handleChange(id);
  };

  const cleanUrl = (url) => {
    // const urlObj = new URL("/en-US/docs", url);
    // return urlObj.host.replace(/^www\./, "");
    return url.replace(/:\/\//g, ".")
  }; 

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Col className="col-12 col-lg-3 d-flex justify-content-center align-items-center">
      <div className="cateCard">
        <div className="cardImage">
          <span
            className={favorites.includes(id) ? "show" : ""}
            onClick={() => addFavorite(id)}
          >
            <i className="fa fa-bookmark"></i>
          </span>
          <div
            className="image"
            style={{
              backgroundImage: `url(https://wwcbzpqlwqiojdnspqoi.supabase.co/storage/v1/object/public/SS/${cleanUrl(
                url
              )}.png)`,
            }}
          ></div>
        </div>
        <div className="cardContent">
          <h5 className="cardTitle">{title}</h5>
          <p className="text">
            {showFullDescription ? description : `${shortDescription}...`}
            {description.length > 100 && (
              <span
                onClick={toggleDescription}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                {showFullDescription ? " Show Less" : " Load More"}
              </span>
            )}
          </p>
          <p className="tags">{subcategory}</p>
          <div className="rate">
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>
            </div>
          </div>

          <div className="actionBtn">
            <a href={url} target="_blank" className="cta btn btn-primary">
              try now
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
