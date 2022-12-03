import { Answer } from "./answer/answer.model";
import { Feedback } from "./feedback/feedback.model";
import { Question } from "./question/question.model";

const init = () => {
  Question.sync();
  Answer.sync();
  Feedback.sync();
};
export default init;
