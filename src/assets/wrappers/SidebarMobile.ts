import styled from "styled-components";

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 2.5rem;
  }
  .close-btn {
    font-size: 4rem;
    background: transparent;
    border-color: transparent;
    color: hsl(22, 31%, 52%);
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 4rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: hsl(209, 34%, 30%);
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: hsl(210, 36%, 96%);
    color: hsl(211, 39%, 23%);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
`;
export default SidebarContainer;
