import styled from "styled-components";

export const Container = styled.div`
  background: #41e6cd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

export const Banner = styled.div`
  img {
    max-width: 100%;
    width: 40rem;
    height: 7rem;
    @media (max-width: 629px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const Card = styled.div`
  background: #f7f7f7;
  padding: 1rem 1rem;
`;

export const WrapperMoods = styled.div``;

export const Mood = styled.a`
  margin: 0.2rem;
  cursor: pointer;
  img {
    width: 5rem;
  }
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;
  padding: 3rem 0;
`;

export const Span = styled.div<{
  fontSize?: string;
  bold?: boolean;
  margin?: string;
}>`
  margin: ${({ margin }) => margin};
  font-family: ${({ bold }) => (bold ? "helveticaBold" : "helvetica")};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: #606060;
`;
