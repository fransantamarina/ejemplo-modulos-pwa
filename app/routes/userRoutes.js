const express = require('express');
const router = express.Router();
const { register, confirmRegistration, saveImage } = require("../controllers/userController");
const { validateRegistration } = require('../middlewares/user.middleware');
const multer = require('multer');
const config = {dest: './app/public/tmp'}
const upload = multer(config);

/* POST users registration. */
router.post('/register',upload.single("imagen"), validateRegistration, register);
/*ESTA RUTA DEBERIA SER POST YA QUE SE CAMBIA EL ESTADO DE HABILITACION EN LA BASE DE DATOS, PARA TESTING SE USA UN METODO GET*/
router.get('/confirm?', confirmRegistration)



//ruta de prueba de subida de imagens
router.post("/upload",upload.array(("imagen")/*max count = cantidad de elementos que puede tener el array*/), saveImage)

module.exports = router;
