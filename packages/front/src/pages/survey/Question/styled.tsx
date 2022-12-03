import styled from "styled-components";

const scoreColors = [
  "#E95666",
  "#E95666",
  "#ea8977",
  "#ea8977",
  "#f4af7d",
  "#f4af7d",
  "#bbe88b",
  "#bbe88b",
  "#74e789",
  "#74e789",
];

export const Card = styled.div<{
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 0;
  border-radius: 0.3rem;
  background: ${({ color }) => color || "#ffffff"};
  padding: 1rem;
  position: relative;
  max-width: 35rem;

  a {
    display: flex;
    justify-content: center;
    color: #42e7cf;
    font-family: helveticaBold;
  }
  .indicators {
    display: flex;
    justify-content: space-between;
  }
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    height: 6rem;
  }
  a {
    cursor: pointer;
  }
`;

export const Arrow = styled.div<{
  color?: string;
}>`
  position: absolute;
  width: 0;
  height: 0;
  margin-left: -24px;
  margin-top: 1rem;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid ${({ color }) => color || "#ffffff"};
`;

export const Score = styled.div<{
  score?: number;
}>`
  height: 3rem;
  border-radius: 1.5rem;
  border: 0.2rem solid #ededed;
  background: #f7f7f7;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  .selected {
    background: #1b828e;
  }

  .container-star {
    width: 100%;
  }
  .container-star:nth-child(
      -n + ${({ score }) => (score === undefined || score === 1 ? 0 : score)}
    ) {
    background: ${({ score }) => scoreColors[score ? score - 1 : 0]};
  }

  .container-star:nth-child(1) {
    border-radius: 50% 0 0 50%;
  }

  .container-star:nth-child(10) {
    border-radius: 0 50% 50% 0;
  }
  .selected {
    border-radius: 0 100% 100% 0;
    width: 50%;
    .wrapper-star {
      background: #1b828e;
    }
  }
  .wrapper-star {
    height: 3rem;
    width: 3rem;
    box-sizing: border-box;
    border-radius: 50%;
    left: 50%;
    align-items: center;
    display: flex;
    justify-content: center;

    @media (max-width: 650px) {
      width: 1.5rem;
      height: 1.5rem;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    @media (max-width: 379px) {
      width: 1rem;
      height: 1rem;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
