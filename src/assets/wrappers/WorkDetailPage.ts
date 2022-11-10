import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .container {
    grid-column: 3/11;

    .heading {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 3.4rem;
      line-height: 5rem;
      color: #21243d;
      margin-bottom: 3rem;
      width: 70%;
    }
    .overview {
      margin-bottom: 4rem;
      .info__container {
        display: flex;
        gap: 2rem;
        margin-bottom: 3rem;
        .info__year {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 62px;
          height: 25px;
          background: #ff7c7c;
          border-radius: 16px;
          color: #ffffff;
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 1.6rem;
          line-height: 6rem;
        }
        .info__describe {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 2rem;
          line-height: 2.9rem;
          color: #21243d;
        }
      }
      .overview__title {
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: #000000;
        width: 90%;
        margin-bottom: 3rem;
      }
    }
    .detail__container {
      .detail__heading-1 {
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        line-height: 4rem;
        color: #21243d;
      }
      .detail__heading-2 {
        font-family: "Heebo", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 6rem;
        color: #21243d;
        margin-top: 0;
      }
      .detail__title {
        font-family: "Heebo";
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: #000000;
        margin-bottom: 1rem;
        width: 90%;
      }
    }
    .img {
      width: 100%;
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 1000px) {
    .container {
      grid-column: 2/12;
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      grid-column: 1/13;
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      .heading {
        width: 100%;
      }
    }
  }
`;
export default Wrapper;
