import { useState } from "react";
import { Answer, IQuestion } from "../../../utils/types";
import { Span } from "../../home/styled";
import Star from "./star";
import { Arrow, Card, Score } from "./styled";

export const Question = ({
  index,
  question,
  onChange,
}: {
  index: number;
  question: IQuestion;
  onChange: (input: Answer) => void;
}) => {
  const [showInputComment, setInputComment] = useState<boolean>(false);
  const [answer, setAnswer] = useState<Answer>({
    score: 0,
    comment: "",
    questionId: question.id,
  });

  const updateAnswer = (input: Answer) => {
    onChange(input);
    setAnswer(input);
  };
  return (
    <Card>
      <Arrow />
      <Span fontSize="0.8rem" color="#D9D9D9" margin="0 0 0.5rem 0">
        {index} of 5
      </Span>
      <Span fontSize="0.8rem" color="#41E6CD" bold={true}>
        Work/Life Balance
      </Span>
      <Span fontSize="1.5rem" color="#7A7A7A" margin="1rem 0">
        {question.title}
      </Span>
      <Score score={answer?.score}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <div
            key={index}
            className={`container-star ${
              answer?.score === index ? "selected" : ""
            }`}
            onClick={() => {
              setInputComment(true);
              updateAnswer({ ...answer, score: index });
            }}
          >
            <div className="wrapper-star">
              <Star selected={(answer?.score || 0) >= index} />
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
        <textarea
          name="comment"
          onChange={(event) =>
            updateAnswer({ ...answer, comment: event.target.value })
          }
        ></textarea>
      )}
      <br />
    </Card>
  );
};
