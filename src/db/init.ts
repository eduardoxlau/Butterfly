import { Answer } from "./answer/answer.model";
import { Feedback } from "./feedback/feedback.model";
import { Question } from "./question/question.model";

const init = async () => {
  await Question.sync();
  await Feedback.sync();
  await Answer.sync();
};
export default init;
