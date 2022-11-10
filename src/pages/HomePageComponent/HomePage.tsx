import Wrapper from "../../assets/wrappers/HomePage";
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

export default HomePage;
