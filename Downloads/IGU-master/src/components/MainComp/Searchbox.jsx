import React from "react";
import "./Main.css";

function Searchbox(props) {
  return (
    <form action="">
      <div className="searchBox">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
        />
      </div>
    </form>
  );
}

export default Searchbox;
