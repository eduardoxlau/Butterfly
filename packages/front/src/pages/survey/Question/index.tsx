import { useState } from "react";
import { Span } from "../../home/styled";
import Star from "./star";
import { Arrow, Card, Score } from "./styled";

export const Question = () => {
  const [showInputComment, setInputComment] = useState<boolean>(false);
  const [score, setScore] = useState<number>();

  return (
    <Card>
      <Arrow />
      <Span fontSize="0.8rem" color="#D9D9D9" margin="0 0 0.5rem 0">
        1 of 5
      </Span>
      <Span fontSize="0.8rem" color="#41E6CD" bold={true}>
        Work/Life Balance
      </Span>
      <Span fontSize="1.5rem" color="#7A7A7A" margin="1rem 0">
        I feel like I have a healthy work/life balance.
      </Span>
      <Score score={score}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <div
            key={index}
            className={`container-star ${score === index ? "selected" : ""}`}
            onClick={() => setScore(index)}
          >
            <div className="wrapper-star">
              <Star selected={(score || 0) >= index} />
            </div>
          </div>
        ))}
      </Score>
      <br />
      <div className="indicators">
        <Span color="#000" bold={true}>
          Disagree
        </Span>
        <Span color="#000" bold={true}>
          Agree
        </Span>
      </div>
      {!showInputComment ? (
        <div onClick={() => setInputComment(true)}>
          <a> Add Comment</a>
        </div>
      ) : (
        <textarea name="comment"></textarea>
      )}
      <br />
    </Card>
  );
};
