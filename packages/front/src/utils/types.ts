export interface Mood {
  id: number;
  path: string;
  message: string;
}

export const moods: Mood[] = [
  {
    id: 1,
    path: "/images/mood-1.v2.png",
    message: "Oops, something needs to change. Thank you for your Feedback.",
  },
  {
    id: 2,
    path: "/images/mood-2.v2.png",
    message: "Mmmmh, things should improve. Thank you for your Feedback.",
  },
  {
    id: 3,
    path: "/images/mood-3.v2.png",
    message: "OK… things could be better. Thank you for your Feedback.",
  },
  {
    id: 4,
    path: "/images/mood-4.v2.png",
    message: "Great! Thank you for your Feedback.",
  },
  {
    id: 5,
    path: "/images/mood-5.v2.png",
    message: "Awesome! Thank you for your Feedback.",
  },
];

export interface Answer {
  questionId: number;
  score: number;
  comment: string;
}

export interface Feedback {
  answers: Answer[] | undefined;
  extraComment: string;
}

export interface IQuestion {
  id: number;
  title: string;
  mood: number;
}
