'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, user_group}) {
      // define association here
      this.belongsToMany(user, {through: user_group})
    }
  };
  group.init({
    name: {type: DataTypes.STRING,
      primaryKey: true}
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};