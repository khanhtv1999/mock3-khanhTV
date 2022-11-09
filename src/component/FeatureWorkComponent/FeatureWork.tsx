import React from "react";
import styled from "styled-components";
import { listFeature } from "../../data/data";
const FeatureWork = () => {
  return (
    <Wrapper>
      <p className="heading">Featured works</p>
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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

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
      width: 62px;
      height: 25px;
      background: #142850;
      border-radius: 16px;
      ////////////////////////
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.8rem;
      line-height: 6rem;
      padding: 0.25rem 1.25rem;
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

      /* Dark Color */

      color: #21243d;
    }
  }
  hr {
    border: 1px solid #e0e0e0;
  }
  .heading {
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 6rem;
    color: #21243d;
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 1585px) {
    .feature__container {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 670px) {
    .feature__container {
      flex-direction: column;
      .feature__container-image {
        display: flex;
        align-items: center;
        justify-content: center;
        .feature__image {
        }
      }
      .feature__container-heading {
        .feature__heading {
        }
      }
      .feature__title {
        font-size: 2rem !important;
        margin-top: 1rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    align-items: center;
    justify-content: center;
    .feature__container {
      flex-direction: column;
      .feature__container-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .feature__image {
          width: 100%;
        }
      }
      .feature__container-heading {
        .feature__heading {
        }
      }
      .feature__title {
        font-size: 2rem !important;
        margin-top: 1rem;
      }
    }
  }
`;
export default FeatureWork;
