import { Route, Routes } from "react-router-dom";
import { Confirmation } from "./confirmation";
import { Form } from "./Form";
import { Container, LeftBar, QuestionBody } from "./styled";

export const Survey = () => {
  return (
    <Container>
      <LeftBar>
        <img src="./images/icon-small.png" alt="" />
      </LeftBar>
      <QuestionBody>
        <>
          <Routes>
            <Route
              path="confirmation"
              element={
                <>
                  <Confirmation />
                </>
              }
            />
            <Route path=":id" element={<Form />} />
          </Routes>
        </>
      </QuestionBody>
    </Container>
  );
};
