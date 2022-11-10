import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .container-icon {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    margin-top: 10rem;
    .icon {
      width: 3rem;
      height: 3rem;
    }
  }
  .license {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #21243d;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`;
export default Wrapper;
