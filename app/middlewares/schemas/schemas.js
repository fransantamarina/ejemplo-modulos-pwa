const Joi = require('joi');

const messageString = {
    "any.required": "El campo es obligatorio",
    "string.min": "El campo debe tener al menos 2 caracteres",
    "string.max": "El campo nombre no debe superar 30 caracteres",
    "string.empty": "El campo no puede estar vacío"
};

const messageEmail = {
    "any.required": "Tenés que ingresar tu email",
    "string.email": "Tenés que ingresar un email válido"    
};

const messagePassword = {
    "any.string": "Tenés que ingresar una contraseña",
    "string.min": "Como minimo deberia tener 8 caracteres",
    "string.max": "Como maximo deberia tener 16 caracteres",
    "string.empty": "El campo no puede estar vacío"
};

exports.schemas = {
    string: Joi.string().min(2).max(30).trim().required().messages(messageString),
    email: Joi.string().email().required().messages(messageEmail),
    password: Joi.string().min(8).max(16).trim().required().messages(messagePassword)
}