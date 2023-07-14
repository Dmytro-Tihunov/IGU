import { useHistory } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import useStore from "../../store";

const OffCanvasHeader = ({ ...props }) => {

const { subcategories } = useStore()

const navigate = useHistory();

function transformUrl(url) {
  return url.replace(",", "").replace("/", "-").replace(/\s+/g, '-').toLowerCase();
}

function navigateToCategoryPage(categoryName) {
  props.onHide();
  navigate.push(`/category/${transformUrl(categoryName)}`);
}

  return (
    <Offcanvas {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Categories</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row>
          {subcategories.map((category, index) => (
            <Col className="block-cat" xs={12} md={3} key={index}>
              <div className="block-title">
                <button className="title-link-canvas" onClick={() => navigateToCategoryPage(category.name)}>
                  {category.name}
                </button>
              </div>
              {category?.subcategories ? (
                <Row>
                  {category?.subcategories.map((subCategory, index) => (
                    <Col xs={12} md={6} key={index}>
                      <button className="sublink-canvas" onClick={() => navigateToCategoryPage(subCategory)}>{subCategory}</button>
                    </Col>
                  ))}
                </Row>
              ) : (
                <></>
              )}
            </Col>
          ))}
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasHeader;
