import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { supabase } from "../../lib/api";

function Header(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

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

  return (
    <section className="headerSection">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img src="./img/headerLogo.png" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories.map((category) => (
                  <NavDropdown.Item key={category} href="#action/3.1">
                 { category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Link to="/login" className="nav-link">
                {props.linkOne}
              </Link>
              <Link to="/signup" className="nav-link">
                {props.linkTwo}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
