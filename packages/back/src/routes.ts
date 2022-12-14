import express from "express";
import { createFeedback, getFeedbacks } from "./db/feedback/feedback.dal";
import { getQuestionsByMood } from "./db/question/question.dal";
import { AddFeedback } from "./types";

const router = express.Router();

router.get("/", async (req, res) => {
  const mood: number = parseInt(req.query.v?.toString() || "1");

  const questions = await getQuestionsByMood(mood);

  res.send(questions);
});

router.post("/feedback", async (req, res) => {
  const feedback: AddFeedback = req.body;

  const newFeedback = await createFeedback(feedback);

  res.send(newFeedback);
});

router.get("/feedbacks", async (_req, res) => {
  const feedbacks = await getFeedbacks();

  res.send(feedbacks);
});

export default router;
