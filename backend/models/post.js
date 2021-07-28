'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.comment);
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Post.init({
    publication_date: DataTypes.STRING,
    user_id: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};