import styled from "styled-components";
const Wrapper = styled.section`
  display: grid;
  background: #edf7fa;
  grid-template-columns: repeat(12, 1fr);

  .recent {
    display: flex;
    justify-content: space-between;
    grid-column: 3/11;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .recent__title {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 2.5rem;

      color: #21243d;
    }
    .recent__view {
      font-family: "Heebo", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.4rem;
      color: #00a8cc;
    }
  }
  .recent__container {
    grid-column: 3/11;
    display: flex;
    gap: 5rem;
    .recent__block {
      background-color: #fff;
      margin-bottom: 2.5rem;
      .recent__container-title {
        margin-bottom: 2rem;
        width: 74%;
        .recent__heading {
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 3rem;
          line-height: 3.8rem;
          color: #21243d;
          padding-top: 1.5rem;
          padding-left: 1.5rem;
        }
        .recent__container-info {
          display: flex;
          gap: 1.5rem;
          padding-left: 1.5rem;
          .recent__info-detail {
            font-family: "Heebo", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.6rem;
            color: #21243d;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
        .recent__detail {
          padding-left: 1.5rem;
          font-family: "Heebo", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.4rem;
          color: #21243d;
        }
      }
    }
  }
  @media only screen and (max-width: 1175px) {
    .recent__container {
      .recent__block {
        .recent__container-title {
          width: 95%;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .recent__container {
      grid-column: 2/12;
    }
  }
  @media only screen and (max-width: 670px) {
    .recent {
      align-items: center;
      justify-content: center;
      .recent__title {
      }
      .recent__view {
        display: none;
      }
    }
    .recent__container {
      flex-direction: column;
      gap: 2rem;
    }
  }
  @media only screen and (max-width: 450px) {
    .recent__container {
      grid-column: 1/13;
      padding-left: 2rem;
      padding-right: 2rem;
      .recent__block {
        .recent__container-title {
          width: 100%;
        }
      }
    }
  }
`;
export default Wrapper;
