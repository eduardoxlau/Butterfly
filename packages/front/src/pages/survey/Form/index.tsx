import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchApi } from "../../../utils/fetch";
import { Answer, Feedback, IQuestion } from "../../../utils/types";
import useFetch from "../../../utils/useFetch";
import { Span } from "../../home/styled";
import { HeaderContent } from "../Header";
import { Question } from "../Question";
import { Arrow, Card } from "../Question/styled";

export const Form = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [moodId, setMoodId] = useState<number>(Number(id));

  const [feedback, setFeedback] = useState<Feedback>({
    extraComment: "",
    answers: [],
  });

  const { response: questions }: { response: any } = useFetch({
    url: `/api?v=${moodId}`,
  });

  const updateAnswer = (input: Answer) => {
    const answers = feedback?.answers || [];

    const answerIndex = answers.findIndex(
      (answer) => input.questionId === answer.questionId
    );

    if (answerIndex >= 0) answers[answerIndex] = input;
    else answers.push(input);

    setFeedback((oldFeedback) => ({ ...oldFeedback, answers }));
  };

  const onSubmit = async () => {
    try {
      await fetchApi({ method: "POST", data: feedback, url: "/api/feedback" });
      navigate("/confirmation");
    } catch (error) {
      console.error(error);
    }
  };
  const isFilled = feedback.answers?.length === 5;

  return (
    <>
      <HeaderContent setMood={setMoodId} />
      <Span color="#ffffff" fontSize="1.2rem" margin="1.5rem 0rem">
        Do you agree with the following statements:
      </Span>
      {questions?.map((question: IQuestion, index: number) => (
        <Question
          key={question.id}
          question={question}
          index={index + 1}
          onChange={updateAnswer}
        />
      ))}
      <br />
      <Card color="#22828E">
        <Arrow color="#22828E" />
        <div className="optional-comment">
          <Span color="#fff" fontSize="1.5rem" margin="1rem 0">
            Anything to add? (Optional)
          </Span>
          <div className="extra-help">Extra feedback helps</div>
        </div>

        <textarea
          name="extraComment"
          onChange={(event) =>
            setFeedback((oldFeedback) => ({
              ...oldFeedback,
              extraComment: event.target.value,
            }))
          }
        ></textarea>
      </Card>
      <br />
      <button
        className={isFilled ? "" : "disabled"}
        disabled={!isFilled}
        onClick={onSubmit}
      >
        Send
      </button>
    </>
  );
};
