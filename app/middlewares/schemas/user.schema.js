const Joi = require('joi');

const { schemas } = require('./schemas')

exports.userSchema = {
    create: Joi.object().keys({
        nombre: schemas.string,
        apellido: schemas.string,
        correo: schemas.email,
        password: schemas.password
    }),
};