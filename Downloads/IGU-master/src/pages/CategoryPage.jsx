import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { categoriesToTransform } from "../constants";
import { useHistory } from "react-router-dom";
import { supabase } from "../lib/api";
import useFavorites from "../hooks/useFavorites";
import ProjectCard from "../components/MainComp/ProjectCard";

function CategoryPage() {
  const { slug } = useParams();
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  const history = useHistory();

  const categories = [
    "writing",
    "design",
    "art-design-and-graphics",
    "audio-and-video",
    "coding",
    "business-and-finance",
    "education-and-productivity",
    "entertainment",
    "social-media",
    "data-analysis-and-management",
  ];
  const req = slug.includes("-")
    ? categoriesToTransform[slug]
    : slug.charAt(0).toUpperCase() + slug.slice(1);
  const expression =
   categories.includes(slug)
      ? "Category.eq." + req
      : "Subcategory.eq." + req;

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  function onAddFavorite(id) {
    toggleFavorite(id);
  }

  useEffect(() => {
    const unlisten = history.listen(() => {
        getTools();
    });
    return () => {
      unlisten();
    };
  }, [history]);


  useEffect(() => {
    getTools();
  }, [slug]);

  async function getTools() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("Tools")
        .select()
        .or(expression);
      if (error) {
        console.log(error, "Fetch Supabase error");
      } else {
        setTools(data);
      }
    } catch (error) {
      console.log(error, "Fetch Supabase error");
    }
    setIsLoading(false);
  }

  return (
    <section className="section-caterory-page">
      <Container fluid>
        <Row className="mainRow">
          <Col className="col-12">
            <Row className="mainRow">
              {tools.length > 0 ? (
                tools.map((item) => {
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CategoryPage;
