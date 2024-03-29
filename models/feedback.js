'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback.init({
    webtoon_id: DataTypes.INTEGER,
    number: DataTypes.STRING,
    link: DataTypes.STRING,
    comments: DataTypes.STRING,
    feedback: DataTypes.STRING,
    subtitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'feedback',
    tableName: 'feedbacks',
    timestamps: false
  });
  return feedback;
};