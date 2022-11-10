import Wrapper from "../../assets/wrappers/WorkPage";
import { listFeature } from "../../data/data";
const WorkPage = () => {
  return (
    <Wrapper>
      <p className="heading">Work</p>
      <div className="container">
        {" "}
        {listFeature.map((item) => {
          return (
            <>
              <div className="feature__container">
                <div className="feature__container-image">
                  <img className="feature__image" src={item.urlImg} />
                </div>
                <div className="feature__container-heading">
                  <h2 className="feature__heading">{item.heading}</h2>
                  <div>
                    <span className="feature__year">{item.year}</span>
                    <span className="feature__describe">{item.describe}</span>
                  </div>
                  <p className="feature__title">{item.title}</p>
                </div>
              </div>{" "}
              <hr />
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default WorkPage;
