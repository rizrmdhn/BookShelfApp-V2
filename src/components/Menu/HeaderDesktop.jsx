import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/HeaderDesktop.css";

function HeaderDesktop() {
  return (
    <>
      <div className="HeaderDesktop container-fluid">
        <h1>
          <Link to="/">
          BookShelfApp V2
          </Link>
        </h1>
        <Nav>
          <NavItem>
            <NavLink
              href="#"
              className="add-book"
              data-bs-toggle="modal"
              data-bs-target="#ModalInput"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </NavLink>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/Reading">
              Reading
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/Finished">
              Finished
            </Link>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}

export default HeaderDesktop;
