import { AddQuestion } from "../../types";
import { Question } from "./question.model";
import sequelizeConnection from "../config";

export const createQuestion = (question: AddQuestion): Promise<Question> => {
  return Question.create(question);
};

export const getQuestionsByMood = (mood: number): Promise<Question[]> => {
  return Question.findAll({
    where: {
      mood,
    },
    order: sequelizeConnection.random(),
    limit: 5,
  });
};
