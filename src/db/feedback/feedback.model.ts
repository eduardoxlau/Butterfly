import SequelizeConnection from "../config";
import { DataTypes, Model } from "sequelize";
import { AddFeedback } from "../../types";
import { Answer } from "../answer/answer.model";

type FeedbackAttributes = {
  id: number;
  extraComment: string;
};

export class Feedback extends Model<FeedbackAttributes, AddFeedback> {
  declare answers: Answer[];
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    extraComment: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "feedbacks",
    sequelize: SequelizeConnection,
  }
);
Feedback.hasMany(Answer, {
  sourceKey: "id",
  foreignKey: "feedbackId",
  as: "answers",
});
