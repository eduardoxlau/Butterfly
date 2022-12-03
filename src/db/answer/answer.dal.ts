import { AddAnswer } from "../../types";
import { Answer } from "./answer.model";

export const createAnswer = (answer: AddAnswer): Promise<Answer> => {
  return Answer.create(answer);
};
