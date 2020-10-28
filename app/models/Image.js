'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
      const Owner = Image.belongsTo(models.User, {
        foreignKey: 'ownerId',
        as: 'owner',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    }
  };
  Image.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ownerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
  });
  return Image;
};