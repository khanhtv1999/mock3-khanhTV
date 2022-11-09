import React from "react";
import styled from "styled-components";
import IntroduceComponent from "../../component/IntroduceComponent/IntroduceComponent";
import RecentPost from "../../component/RecentPostComponent/RecentPost";
import FeatureWork from "../../component/FeatureWorkComponent/FeatureWork";
import FooterComponent from "../../component/FooterComponent/FooterComponent";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="introduce-container">
        <IntroduceComponent />
      </div>
      <div className="recentpost-container">
        <RecentPost />
      </div>
      <div className="featurework-container">
        <FeatureWork />
      </div>
    </Wrapper>
  );
};
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
export default HomePage;
