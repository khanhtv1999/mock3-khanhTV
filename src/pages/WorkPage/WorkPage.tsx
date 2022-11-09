import React from "react";
import styled from "styled-components";
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
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    grid-column: 3/11;
    .feature__container {
      max-width: 65%;
      gap: 3.5rem;
      display: flex;
      .feature__container-image {
        .feature__image {
        }
      }
      .feature__container-heading {
        .feature__heading {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 3rem;

          color: #21243d;
        }
      }
      .feature__year {
        width: 6.2rem;
        height: 2.5rem;
        background: #142850;
        border-radius: 16px;
        ////////////////////////
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 1.8rem;
        line-height: 6rem;
        padding: 0.25rem 1rem;
        margin-right: 2rem;
        color: #ffffff;
      }
      .feature__describe {
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.9rem;

        color: #8695a4;
      }
      .feature__title {
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #21243d;
      }
    }
    hr {
      border: 1px solid #e0e0e0;
    }
  }
  .heading {
    grid-column: 3/11;
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 4.4rem;
    line-height: 6rem;
    color: #21243d;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1588px) {
    .container {
      .feature__container {
        max-width: 85%;
      }
    }
  }
  /* @media only screen and (max-width: 1000px) {
    .heading {
      grid-column: 2/12;
    }
    .container {
      .feature__container {
        max-width: 90%;
      }
    }
  } */
  @media only screen and (max-width: 1000px) {
    .heading {
      grid-column: 2/12;
      font-size: 5rem !important;
    }
    .container {
      grid-column: 2/12;
      gap: 5.5rem;

      .feature__container {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4.5rem;

        .feature__container-heading {
          .feature__heading {
            font-family: "Heebo", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 3rem !important;

            color: #21243d;
          }
        }
        .feature__title {
          font-size: 2rem;
          margin-top: 2.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .heading {
      grid-column: 1/13;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .container {
      grid-column: 1/13;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      .feature__container {
        .feature__container-image {
          width: 100%;
          .feature__image {
            width: 100%;
          }
        }
      }
    }
  }
`;
export default WorkPage;
