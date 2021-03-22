'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ post, group, user_group, friendship }) {
      // define association here
      this.hasMany(post)
      this.belongsToMany(group, {through: user_group})
      this.belongsToMany(this, {through: friendship, as: 'firstuser', foreignKey: 'sectionuser'})
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};