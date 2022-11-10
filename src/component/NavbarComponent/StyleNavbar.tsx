import { AiOutlineMenu } from "react-icons/ai";
import Wrapper from "../../assets/wrappers/StyleNavbar";
import { NavLink } from "react-router-dom";
import "@fontsource/heebo";
import { openSidebar } from "../../redux/SidebarSlice";
import { useDispatch } from "react-redux/es/exports";
const StyleNavbar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <nav className="navbar">
        <button
          type="button"
          className="nav-toggle"
          onClick={() => dispatch(openSidebar())}
        >
          <AiOutlineMenu />
        </button>{" "}
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
          to="/contact"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>
      </nav>
    </Wrapper>
  );
};

export default StyleNavbar;
