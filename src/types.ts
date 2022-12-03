export interface AddQuestion {
  title: string;
  mood: number;
}
export interface AddAnswer {
  questionId: number;
  score: number;
  comment: string;
}

export interface AddFeedback {
  answers: AddAnswer[];
  extraComment: string;
}
