import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../data/links";
import SidebarContainer from "../../assets/wrappers/SidebarMobile";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { closeSidebar } from "../../redux/SidebarSlice";

const SidebarMobile = () => {
  const { isSidebarOpen } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={() => dispatch(closeSidebar())}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default SidebarMobile;
