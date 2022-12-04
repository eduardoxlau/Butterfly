import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #166e78;
  background-image: linear-gradient(180deg, rgba(13, 77, 84, 0), #0d4d54 77%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;

  height: 100vh;
  overflow: hidden;
`;

export const LeftBar = styled.div`
  display: flex;
  width: 2.6rem;
  background-color: #0d4d54;
  display: flex;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
    margin-top: 5px;
  }
`;

export const QuestionBody = styled.div`
  padding: 2rem 3rem;
  overflow-y: auto;
  width: 100%;
  position: relative;

  .optional-comment {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    .extra-help {
      display: flex;
      height: 5rem;
      width: 5rem;
      align-items: center;
      background: #0d4d54;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      font-size: 0.8rem;
      font-family: helveticaBold;
    }
  }
  button {
    min-width: 12rem;
    font-size: 1.5rem;
    border-radius: 0.3rem;
    line-height: 2.4rem;
    padding: 0.5rem 0.2rem;
    color: #fff;
    background: #2ce6ce;
    border: 1px solid #2ce6ce;
    text-decoration: none;
    display: inline-block;
  }
  button::after {
    margin-left: 1.8rem;
    height: 1rem;
    width: 2rem;
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg width='25' height='15' viewBox='0 0 25 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.25 7.392a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 1 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702v-.004c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6A1 1 0 0 0 16.542 2.1l4.294 4.292H1.25a1 1 0 0 0-1 1z' fill='%23DEDEDE' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .disabled {
    cursor: default;
    color: #dedede;
    background: #ededed;
    border: 1px solid #dedede;
  }
`;
