'use strict';
const { Model, UUIDV4 } = require('sequelize');
const bcrypt = require("bcrypt");
const { rounds } = require("../../config/auth")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Image, {
        foreignKey: 'ownerId',
        as: 'images'
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uidCorreo: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  User.beforeCreate(async (User) => {
    try {
      //encriptar contraseña previo a la creacion de usuario
      const hashedPassword = await bcrypt.hashSync(User.password, +rounds);
      User.password = hashedPassword;
    } catch (err) {
      console.log(err);
    }
  });
  return User;
};