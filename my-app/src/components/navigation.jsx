import React from "react";
import { Link, withRouter } from "react-router-dom";

/*
import styled from 'styled-components';

const Outline = styled.span`
  font-color: red;
`*/

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-light" >
        <div class="container">
          <Link class="navbar-brand" to="/">
            <span class="h3" style = {{}}>
              Abi Lopez
            </span>
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                  <span class="h4">
                    Home
                  </span>
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/about">
                  <span class="h4">
                    About
                  </span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/contact">
                  <span class="h4">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
