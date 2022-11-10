import Wrapper from "../../assets/wrappers/Introduce";
import AvatarHome from "../../assets/images/avatar_home.png";
const IntroduceComponent = () => {
  return (
    <Wrapper>
      <div className="introduce__text">
        <h1 className="introduce__text-primary">
          Hi, I am John,
          <br /> Creative Technologist
        </h1>
        <p className="introduce__text-detail">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="introduce__text-button">Dowload Resume</button>
      </div>
      <div className="introduce__avatar">
        <img className="avatar" src={AvatarHome} />
      </div>
    </Wrapper>
  );
};

export default IntroduceComponent;
