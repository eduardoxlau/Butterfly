import SequelizeConnection from "../config";
import { DataTypes, Model } from "sequelize";
import { AddQuestion } from "../../types";
import { Answer } from "../answer/answer.model";

type QuestionAttributes = {
  id: number;
  title: string;
  mood: number;
};

export class Question extends Model<QuestionAttributes, AddQuestion> {
  id!: number;
  title!: string;
  mood!: number;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    mood: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "questions",
    sequelize: SequelizeConnection,
  }
);

Question.hasMany(Answer, {
  sourceKey: "id",
  foreignKey: "questionId",
  as: "answers",
});
