'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user }) {
      this.belongsTo(user)
    }
  };
  post.init({
    content: { type: DataTypes.STRING},
    post_id: { 
      type: DataTypes.STRING,
      primaryKey: true
      }  
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};