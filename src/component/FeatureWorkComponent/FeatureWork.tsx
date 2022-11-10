import React from "react";
import styled from "styled-components";
import { listFeature } from "../../data/data";
import Wrapper from "../../assets/wrappers/FeatureWork";
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

export default FeatureWork;
