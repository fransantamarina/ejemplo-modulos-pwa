const express = require('express');
const router = express.Router();
const {register, confirmRegistration } = require("../controllers/userController");


/* POST users registration. */
router.post('/register', register);
/*ESTA RUTA DEBERIA SER POST YA QUE SE CAMBIA EL ESTADO DE HABILITACION EN LA BASE DE DATOS, PARA TESTING SE USA UN METODO GET*/
router.get('/confirm?', confirmRegistration)

module.exports = router;
