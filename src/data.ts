import { AddFeedback, Question } from "./types";

export const questions: Question[] = [
  {
    id: 1,
    title:
      "Dolor esse eu est sunt irure deserunt exercitation exercitation dolor quis ut.",
    mood: 1,
  },
  {
    id: 2,
    title:
      "Dolor esse eu est sunt irure deserunt exercitation exercitation dolor quis ut.",
    mood: 2,
  },
  {
    id: 1,
    title:
      "Dolor esse eu est sunt irure deserunt exercitation exercitation dolor quis ut.",
    mood: 3,
  },
  {
    id: 1,
    title:
      "Dolor esse eu est sunt irure deserunt exercitation exercitation dolor quis ut.",
    mood: 4,
  },
  {
    id: 1,
    title:
      "Dolor esse eu est sunt irure deserunt exercitation exercitation dolor quis ut.",
    mood: 5,
  },
];

export const feedbacks: AddFeedback[] = [];

export const createFeedBack = (feedback: AddFeedback) => {
  feedbacks.push(feedback);

  return feedbacks;
};
