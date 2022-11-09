import React from "react";
import styled from "styled-components";
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
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  margin-bottom: 5rem;
  .introduce__text {
    max-width: 55.6rem;

    .introduce__text-primary {
      font-family: "Heebo", sans-serif;
      font-weight: 700;
      font-size: 4.8rem;
      line-height: 6rem;
      color: #21243d;
      margin: 0;
    }
    .introduce__text-detail {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.75rem;
      line-height: 2.4rem;
      color: #21243d;
      margin: 0;
      margin-top: 4rem;
    }
    .introduce__text-button {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 2.9rem;
      color: #ffffff;
      border: none;
      background: #ff6464;
      border-radius: 2px;
      padding: 1.75rem;
      margin-top: 4rem;
    }
  }
  .introduce__avatar {
    display: flex;
    justify-content: flex-end;
    .avatar {
      display: block;
      width: 25rem;
      height: 25rem;
    }
  }
  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    .introduce__text {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-row: 2/3;
      flex-direction: column;
      text-align: center;
    }
    .introduce__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 4rem;

      grid-row: 1/2;
    }
  }
`;
export default IntroduceComponent;
