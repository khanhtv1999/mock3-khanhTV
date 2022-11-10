import WorkDetail_1 from "../../assets/images/WorkDetail_1.png";
import WorkDetail_2 from "../../assets/images/WorkDetail_2.png";
import WorkDetail_3 from "../../assets/images/WorkDetail_3.png";
import Wrapper from "../../assets/wrappers/WorkDetailPage";
const WorkDetailPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="heading">Designing Dashboards with usability in mind</h1>
        <div className="overview">
          <div className="info__container">
            <span className="info__year">2020</span>
            <span className="info__describe">
              Dashboard, User Experience Design
            </span>
          </div>
          <p className="overview__title">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <img className="img" src={WorkDetail_1} />
          </div>
        </div>
        <div className="detail__container">
          <h1 className="detail__heading-1">Heading 1</h1>
          <h2 className="detail__heading-2">Heading 2</h2>
          <p className="detail__title">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="detail__container-image">
            <img className="img" src={WorkDetail_2} />
            <img className="img" src={WorkDetail_3} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WorkDetailPage;
