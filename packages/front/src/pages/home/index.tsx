import { Link } from "react-router-dom";
import { moods } from "../../utils/types";
import {
  Banner,
  Card,
  Container,
  Footer,
  Mood,
  Span,
  WrapperMoods,
} from "./styled";

export const Home = () => (
  <Container>
    <Banner>
      <img src="./images/bf-banner.v2.png" alt="" />
    </Banner>
    <Card>
      <Span>
        <strong>DEMO INC.</strong> would like to know:
      </Span>
      <div>
        <Span fontSize="1.5rem" bold={true} margin="0.5rem">
          How is your week going?
        </Span>
      </div>
      <WrapperMoods>
        {moods.map(({ id, path }) => (
          <Link to={`/${id}`} key={id}>
            <Mood>
              <img src={process.env.PUBLIC_URL + path} alt="" />
            </Mood>
          </Link>
        ))}
      </WrapperMoods>
      <br />
      <div>
        <Span>Your answer will always remain anonymous</Span>
      </div>
    </Card>
    <Footer>
      <Span fontSize="0.7rem">Butterfly. Your Team's Happiness Manager.</Span>
      <br />
      <div>
        <Span fontSize="0.8rem">
          Appynest, Inc. - 604 East Eleven Street, NY 10009
        </Span>
        <Span>©2022 Appynest, Inc. All rights reserved.</Span>
      </div>
    </Footer>
  </Container>
);
