import SequelizeConnection from "../config";
import { DataTypes, Model } from "sequelize";
import { AddAnswer } from "../../types";

type AnswerAttributes = {
  id: number;
  questionId: number;
  feedbackId: number;
  score: number;
  comment: string;
};

export class Answer extends Model<AnswerAttributes, AddAnswer> {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    questionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    feedbackId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    comment: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    tableName: "answers",
    sequelize: SequelizeConnection,
  }
);
