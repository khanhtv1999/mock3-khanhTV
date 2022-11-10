import Wrapper from "../../assets/wrappers/RecentPost";
const RecentPost = () => {
  return (
    <Wrapper>
      <div className="recent">
        <p className="recent__title">Recent posts</p>
        <p className="recent__view">View all</p>
      </div>
      <div className="recent__container">
        <div className="recent__block">
          <div className="recent__container-title">
            {" "}
            <h2 className="recent__heading">
              Making a design system from scratch
            </h2>
            <div className="recent__container-info">
              <span className="recent__info-detail">12 Feb 2020</span>
              <span className="recent__info-detail">|</span>
              <span className="recent__info-detail">Design, Pattern</span>
            </div>
            <p className="recent__detail">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="recent__block">
          <div className="recent__container-title">
            {" "}
            <h2 className="recent__heading">
              Making a design system from scratch
            </h2>
            <div className="recent__container-info">
              <span className="recent__info-detail">12 Feb 2020</span>
              <span className="recent__info-detail">|</span>
              <span className="recent__info-detail">Design, Pattern</span>
            </div>
            <p className="recent__detail">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecentPost;
