import styled from "styled-components";
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .introduce-container {
    grid-column: 3/11;
  }
  .recentpost-container {
    grid-column: 1/13;
  }
  .featurework-container {
    grid-column: 3/11;
  }
  @media only screen and (max-width: 1000px) {
    .introduce-container {
      grid-column: 2/12;
    }
    .featurework-container {
      grid-column: 2/12;
    }
  }
  @media only screen and (max-width: 450px) {
    .introduce-container {
      grid-column: 1/13;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .recentpost-container {
      grid-column: 1/13;
    }
    .featurework-container {
      grid-column: 1/13;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
export default Wrapper;
