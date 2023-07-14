import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import Searchbox from "../MainComp/Searchbox";
import ProjectCard from "../MainComp/ProjectCard";
import MenuItems from "../Common/MenuItems";
import { useClickAway } from "react-use";
import useFavorites from "../../hooks/useFavorites";
import useStore from "../../store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";
import "../Common/Menu.css";

const Categories = forwardRef((props, ref) => {

  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [isReversed, setIsReversed] = useState(false);
  const [sortBy, setSortBy] = useState("None");
  const [showFavorites, setShowFavorites] = useState(false);
  const dropDownRefCatMenu = useRef(null);
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  const { tools, subcategories } = useStore();

  useClickAway(dropDownRefCatMenu, () => {
    setShowDropdown(false);
  });

  useImperativeHandle(ref, () => ({
    formHeroSearch(data) {
      setSearchTerm(data);
    },
  }));

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  // Filter data
  const filteredData = tools
    .filter((item) => {
      if (isReversed) {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    })
    .filter((item) => {
      if (chosenCategory === "All") {
        return true;
      } else {
        return (
          item.Category === chosenCategory ||
          item.Subcategory === chosenCategory
        );
      }
    })
    .filter((item) => {
      if (showFavorites) {
        return favorites.includes(item.ID);
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (sortBy === "Name") {
        return a.Name.localeCompare(b.Name);
      } else {
        return true;
      }
    });

  function onAddFavorite(id) {
    toggleFavorite(id);
  }

  const listData = isReversed ? filteredData.reverse() : filteredData;

  function onSortChange(name, type) {
    setSortBy(name);
    setIsReversed(type);
  }

  function onSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function setCategory(category) {
    setChosenCategory(category);
    setShowDropdown(false);
  }

  const loadMoreProjects = () => {
    setLimit((prevLimit) => prevLimit + 20);
  };

  return (
    <section ref={ref} id="categories" className="ctegoriesSection">
      <Container fluid>
        <Row className="mainRow">
          <Col className="col-12">
            <div className="catHeader">
              <Searchbox
                handleChange={onSearchTermChange}
                search={searchTerm}
                placeholder="Search by name"
              />
              <div className="dropdownButtons">
                <nav className="menus-block">
                  <div>
                    Show favorites
                    <div className="show-favorites">
                      <input
                        onClick={() => setShowFavorites((prev) => !prev)}
                        defaultChecked={showFavorites}
                        type="checkbox"
                      />
                      <span />
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="button-open-menu"
                  >
                    {chosenCategory} <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7z"></path></svg>
                  </button>
                  {showDropdown && (
                    <ul className="menus" ref={dropDownRefCatMenu}>
                      <li
                        className="menu-items"
                        onClick={() => setChosenCategory("All")}
                      >
                        <button>All</button>
                      </li>
                      {subcategories.map((menu, index) => {
                        const depthLevel = 0;
                        return (
                          <MenuItems
                            callback={setCategory}
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                          />
                        );
                      })}
                    </ul>
                  )}
                </nav>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {sortBy === "None" ? "Sort by" : sortBy}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) => setSortBy("Name")}
                      value="Name"
                    >
                      Name
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => onSortChange("Newest", true)}
                      value="Newest"
                    >
                      Newest
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => onSortChange("Oldest", false)}
                      value="Oldest"
                    >
                      Oldest
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mainRow">
          <Row className="mainRow">
            {filteredData.length > 0 ? (
              listData.slice(0, limit).map((item) => {
                return (
                  <ProjectCard
                    handleChange={onAddFavorite}
                    key={item?.ID}
                    title={item?.Name}
                    favorites={favorites}
                    id={item?.ID}
                    description={item?.Description}
                    subcategory={item?.subcategory}
                    url={item?.URL}
                  />
                );
              })
            ) : (
              <h1 className="warning_message">No results found :(</h1>
            )}
          </Row>
          <Row className="mainRow">
            <Col>
              <div className="moreBtn">
                {filteredData.length >= 20 && limit <= filteredData.length ? (
                  <button
                    onClick={loadMoreProjects}
                    className="cta btn btn-primary"
                  >
                    Load more
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
});

export default Categories;
