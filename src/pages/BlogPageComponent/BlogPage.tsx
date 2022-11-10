import { ListBlog } from "../../data/data";
import Wrapper from "../../assets/wrappers/BlogPage";
const BlogPage = () => {
  return (
    <Wrapper>
      <h2 className="heading-large">Blog</h2>
      <div className="wrapper-child">
        {ListBlog.map((item) => {
          return (
            <div className="container-blog">
              {" "}
              <div className="block-blog">
                <p className="blog__heading">{item.heding}</p>
                <div className="blog__info">
                  <span className="blog__date">{item.date}</span>
                  <span className="blog__jamb">|</span>
                  <span className="blog__describe">{item.describe}</span>
                </div>
                <p className="blog__detail">{item.detail}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BlogPage;
