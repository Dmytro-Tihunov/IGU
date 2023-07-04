import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "../MainComp/Searchbox";
import ProjectCard from "../MainComp/ProjectCard";
import "./Categories.css";
import { supabase } from "../../lib/api";

const Categories = forwardRef((props, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortBy, setSortBy] = useState("None");

  useImperativeHandle(ref, () => ({
    formHeroSearch(data) {
      setSearchTerm(data);
    },
  }));

  useEffect(() => {
    setIsLoading(true);
    getProjects();
    getCategories();
    setIsLoading(false);
  }, []);

  // Get all tools
  async function getProjects() {
    const { data, error } = await supabase.from("Tools").select();
    if (error) {
      console.log(error, "Fetch Supabase error");
    } else {
      setData(data);
    }
  }

  // Filter data
  const filteredData = data
    .filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .filter((item) => {
      if (chosenCategory === "All") {
        return true;
      } else {
        return item.Category === chosenCategory;
      }
    })
    .sort((a, b) => {
      if (sortBy === "Name") {
        return a.Name.localeCompare(b.Name);
      } else {
        return true;
      }
    });

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

  function onSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearches(e) {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();
    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedValue)
      );
    });
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
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {chosenCategory}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setChosenCategory("All")}>
                      All
                    </Dropdown.Item>
                    {categories.map((el) => {
                      return (
                        <Dropdown.Item
                          onClick={() => setChosenCategory(el)}
                          value={el}
                          key={el}
                        >
                          {el}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {sortBy === "None" ? "Sort by" : sortBy}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) => setSortBy("Name")}
                      value="Name"
                      href="#/action-1"
                    >
                      Name
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown>
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
                </Dropdown> */}
              </div>
              {/* <a
                onClick={handleSearch}
                href="#link"
                className="cta btn btn-primary"
              >
                Search
              </a> */}
            </div>
          </Col>
        </Row>
        <Row className="mainRow">
          <Row className="mainRow">
            {filteredData.length > 0 ? (
              filteredData.slice(0, limit).map((item) => {
                return (
                  <ProjectCard
                    key={item?.Name}
                    title={item?.Name}
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
