import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "@fontsource/heebo";

const StyleNavbar = () => {
  return (
    <Wrapper>
      {" "}
      <nav className="navbar">
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Work
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .navbar {
    display: flex;
    gap: 4rem;
    justify-content: flex-end;
    margin-right: 9rem;
    margin-top: 2rem;
    margin-bottom: 15rem;
    .link {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.9rem;
      text-decoration: none;
      color: #000;
    }
    .active {
      color: #ff6464;
    }
  }
`;
export default StyleNavbar;
