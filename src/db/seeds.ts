import { AddQuestion } from "../types";
import init from "./init";
import { Question } from "./question/question.model";

export const questionsMock: AddQuestion[] = [...Array(50).keys()].map(
  (index: number) => ({
    title: `Question ${index}`,
    mood: Math.floor(Math.random() * 5) + 1,
  })
);

const run = async () => {
  await init();
  await Question.bulkCreate(questionsMock);
};

run();
