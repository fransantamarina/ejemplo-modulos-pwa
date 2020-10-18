const express = require('express');
const router = express.Router();
const { sendEmail } = require("../utils/mailSender")




//TESTEO DE FUNCIONAMIENTO CORRECTO DE CREACION Y VERIFICACION DE TOKEN -> HACER REFACTOR Y COLOCAR DONDE CORRESPONDE
/* GET home page. */
router.get('/token', function (req, res, next) {
  const payload = "1234";
  const token = createToken({ payload })
  const email  = sendEmail({to: "fransantamarina@gmail.com", subject: "Espero que llegue el token", token})  
  res.json(email)
});
router.get('/token/verify?', function (req, res, next) {
  const token = req.query.token
  const verifiedToken = verifyToken(token)
  res.json({ verifiedToken })
});

module.exports = router;
