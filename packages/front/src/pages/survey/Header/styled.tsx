import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const MoodContainer = styled.div`
  a {
    display: flex;
  }
  span {
    align-self: center;
    margin-left: -2rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 0.3rem 0 0 0.3rem;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EShape%3C/title%3E%3Cpath d='M7.94 7.94l-.67-2.02-3.853-3.853-1.35 1.35L5.923 7.27l2.017.67zM.28.28a.954.954 0 0 0 0 1.35l.993.992 1.35-1.35L1.628.28a.954.954 0 0 0-1.35 0zm10.97 1.97H5.933l.75.75h4.567v8.25H3V6.683l-.75-.75v5.317c0 .414.336.75.75.75h8.25a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z' fill='%232CE6CE' fill-rule='evenodd'/%3E%3C/svg%3E")
      no-repeat 50% #0d4d54;
  }
  img {
    width: 8rem;
    @media (max-width: 629px) {
      height: 4rem;
      width: 4rem;
    }
  }
`;

export const ChangeMoodContainer = styled.div`
  box-sizing: border-box;
  max-width: 52rem;
  background: #0d4d54;
  padding: 1rem 1rem;
`;

export const WrapperMoodsImage = styled.div`
  margin-top: 0.5rem;
  display: flex;
  height: 5rem;
  justify-content: center;
`;

export const MoodImage = styled.div`
  .active,
  img:hover:not(.active) {
    background: #ffffff;
    margin: 0.2rem;
  }

  img {
    width: 4rem;
    border: none;
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    padding: 0.2rem;
    transition: background-color 0.1s;
  }
`;
