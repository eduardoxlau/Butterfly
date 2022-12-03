export interface Question {
  id: number;
  title: string;
  mood: number;
}

export interface Answer {
  id: number;
  questionId: number;
  score: number;
  comment: string;
}
export type AddAnswer = Omit<Answer, "id">;

export interface AddFeedback {
  answers: AddAnswer[];
  extraComment: string;
}
