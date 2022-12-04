import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Mood, moods } from "../../../utils/types";
import { Span } from "../../home/styled";
import {
  ChangeMoodContainer,
  Header,
  MoodContainer,
  MoodImage,
  WrapperMoodsImage,
} from "./styled";

export const HeaderContent = ({ setMood }: { setMood: any }) => {
  let { id } = useParams();

  const [isEditMood, setEditMood] = useState<boolean>(false);

  const mood: Mood | undefined = moods.find((mood) => mood.id === Number(id));

  if (!mood) return <>Error</>;

  return (
    <Header>
      {isEditMood ? (
        <ChangeMoodContainer>
          <Span color="#fff" bold={true}>
            Did you make a mistake? Please select your correct mood:
          </Span>
          <WrapperMoodsImage>
            {moods.map(({ id, path }) => (
              <Link to={`/${id}`} key={id}>
                <MoodImage>
                  <img
                    src={process.env.PUBLIC_URL + path}
                    className={id === mood.id ? "active" : "otra"}
                    alt=""
                    onClick={() => {
                      setEditMood(false);
                      setMood(id);
                    }}
                  />
                </MoodImage>
              </Link>
            ))}
          </WrapperMoodsImage>
        </ChangeMoodContainer>
      ) : (
        <>
          <MoodContainer>
            <Link to="" onClick={() => setEditMood(true)}>
              <span />
              <img src={process.env.PUBLIC_URL + mood.path} alt="" />
            </Link>
          </MoodContainer>
          <div>
            <Span color="#ffffff" fontSize="1.2rem" margin="1rem">
              {mood.message}
            </Span>
            <Span fontSize="0.8rem" color="#41E6CD" margin="1rem">
              Your answers will always remain anonymous
            </Span>
          </div>
        </>
      )}
    </Header>
  );
};
