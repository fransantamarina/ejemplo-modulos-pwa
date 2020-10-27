'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
      Image.belongsTo(models.User, {
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
      allowNull = false,
    },
    idOwner: {
      type: DataTypes.UUID,
      allowNull = false,
    }
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
  });
  return Image;
};