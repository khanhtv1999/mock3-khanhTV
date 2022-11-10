import styled from "styled-components";
const Wrapper = styled.div`
  .navbar {
    display: flex;
    gap: 4rem;
    justify-content: flex-end;
    margin-right: 9rem;
    margin-top: 2rem;
    margin-bottom: 10rem;
    .nav-toggle {
      font-size: 4.5rem;
      cursor: pointer;
      border: none;
      background-color: #fff;
    }
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

  @media screen and (max-width: 500px) {
    .navbar {
      margin-right: 2rem;
      margin-bottom: 1rem;
      .link {
        display: none;
      }
    }
  }
  @media screen and (min-width: 500px) {
    .nav-toggle {
      display: none;
    }
  }
`;
export default Wrapper;
