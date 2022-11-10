import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .heading-large {
    grid-column: 4/9;
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6rem;
    color: #21243d;
    margin-bottom: 4rem;
  }
  .wrapper-child {
    grid-column: 4/10;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    .container-blog {
      .block-blog {
        width: 85%;
        .blog__heading {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 3.4rem;
          line-height: 4.4rem;
          color: #21243d;
        }
        .blog__info {
          display: flex;
          gap: 2.5rem;
          margin-top: 1.5rem;
          .blog__date {
            font-family: "Heebo", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 2.9rem;
            color: #21243d;
          }
          .blog__jamb {
            font-size: 2.25rem;
          }
          .blog__describe {
            font-family: "Heebo";
            font-style: normal;
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 2.9rem;
            color: #8695a4;
          }
        }
        .blog__detail {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 2rem;
          line-height: 2.4rem;
          color: #21243d;
          margin-top: 1.5rem;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
  hr {
    border: 1px solid #e0e0e0;
  }
  @media only screen and (max-width: 1550px) {
    .heading-large {
      grid-column: 3/11;
    }
    .wrapper-child {
      grid-column: 3/11;
    }
  }
  @media only screen and (max-width: 600px) {
    .heading-large {
      grid-column: 2/12;
    }
    .wrapper-child {
      grid-column: 2/12;
      .container-blog {
        .block-blog {
          width: 100%;
        }
        .blog__describe {
          font-size: 1.75rem;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .heading-large {
      grid-column: 1/13;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .wrapper-child {
      grid-column: 1/13;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      .container-blog {
        .block-blog {
          .blog__heading {
            font-size: 2.8rem;
          }
          .blog__info {
            gap: 1.5rem;
            .blog__date {
              font-size: 1.75rem;
            }
            .blog__describe {
              font-size: 1.75rem;
            }
          }
        }
      }
    }
  }
`;
export default Wrapper;
