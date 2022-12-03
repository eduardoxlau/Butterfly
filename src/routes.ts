import express from "express";
import { createFeedBack, questions } from "./data";
import { AddFeedback } from "./types";

const router = express.Router();

router.get("/", (req, res) => {
  const mood: number = parseInt(req.query.v?.toString() || "1");

  res.send(questions.filter((question) => question.mood === mood));
});

router.post("/feedback", (req, res) => {
  const feedback: AddFeedback = req.body;

  const feedbacks = createFeedBack(feedback);

  res.send(feedbacks);
});

export default router;
