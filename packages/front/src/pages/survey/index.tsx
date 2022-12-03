import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Mood, moods } from "../../utils";
import { Span } from "../home/styled";
import { HeaderContent } from "./Header";
import { Question } from "./Question";
import { Arrow, Card } from "./Question/styled";
import { Container, LeftBar, QuestionBody } from "./styled";

export const Survey = () => {
  let { id } = useParams();

  const [moodId, setMoodId] = useState<number>(Number(id));

  const mood: Mood | undefined = moods.find((mood) => mood.id === moodId);

  if (!mood) return <div>Error</div>;

  return (
    <Container>
      <LeftBar>
        <img src="./images/icon-small.png" alt="" />
      </LeftBar>
      <QuestionBody>
        <HeaderContent mood={mood} setMood={setMoodId} />
        <Span color="#ffffff" fontSize="1.2rem" margin="1.5rem 0rem">
          Do you agree with the following statements: {mood.id}
        </Span>

        {[1, 2, 3, 4, 5].map((question) => (
          <Question />
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

          <textarea name="extraComment"></textarea>
        </Card>
        <br />
        <button className="disabled"> Send</button>
      </QuestionBody>
    </Container>
  );
};
