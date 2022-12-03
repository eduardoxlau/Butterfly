import request from "supertest";
import init from "./db/init";
import { Question } from "./db/question/question.model";
import app from "./index";
import { AddFeedback, AddQuestion } from "./types";

const questionsMock: AddQuestion[] = [...Array(50).keys()].map(
  (index: number) => ({
    title: `Question ${index}`,
    mood: Math.floor(Math.random() * 5) + 1,
  })
);

describe("Routes", () => {
  beforeAll(async () => {
    await init();
    await Question.bulkCreate(questionsMock);
  });

  it.each([
    ["mood 1", "1"],
    ["mood 2", "2"],
    ["mood 3", "3"],
    ["mood 4", "4"],
    ["mood 5", "5"],
  ])("Should return questions with %s", async (_, mood) => {
    const response = await request(app).get(`/api?v=${mood}`);

    const questions: Question[] = response.body;
    questions.forEach((question) => expect(question.mood).toBe(mood));
  });

  it("should create a feedback", async () => {
    const answer = {
      questionId: 1,
      score: 1,
      comment: "hola",
    };

    const input: AddFeedback = {
      answers: [answer],
      extraComment: "",
    };

    const response = await request(app).post(`/api/feedback`).send(input);

    expect(response.status).toBe(200);

    expect(response.body.answers[0]).toMatchObject(answer);
  });
});
