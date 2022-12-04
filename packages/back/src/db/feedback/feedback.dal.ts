import { AddFeedback } from "../../types";
import { Answer } from "../answer/answer.model";
import { Feedback } from "./feedback.model";

export const createFeedback = (feedback: AddFeedback): Promise<Feedback> => {
  return Feedback.create(feedback, {
    include: [
      {
        model: Answer,
        as: "answers",
      },
    ],
  });
};

export const getFeedbacks = (): Promise<Feedback[]> => {
  return Feedback.findAll({
    include: [
      {
        model: Answer,
        as: "answers",
      },
    ],
  });
};
