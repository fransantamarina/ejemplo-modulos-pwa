const express = require('express');
const router = express.Router();

const { createToken, verifyToken } = require('../utils/token')


//TESTEO DE FUNCIONAMIENTO CORRECTO DE CREACION Y VERIFICACION DE TOKEN -> HACER REFACTOR Y COLOCAR DONDE CORRESPONDE
/* GET home page. */
router.get('/token', function (req, res, next) {
  const payload = "1234";
  const token = createToken({ payload })
  res.json({ token: token })

});
router.get('/token/verify', function (req, res, next) {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiMTIzNCIsImlhdCI6MTYwMzAwODI4NSwiZXhwIjoxNjAzMDExODg1fQ.c4qOzUTnQYqXH5cloCpgvbjvLNGTO8XqVa8WzrrznPYQwM7unIOgsiOx-Enr0peKqmm5AXslp0Njstwc8CXZygNgmND1VPfwL-CQqO9ItkVMtsQjd_1-gvr_1TE8bPyE4alCgY5pd_u27F-YnouvytyknhmJEAfRsnsiaQoHEL4"
  const verifiedToken = verifyToken(token)
  res.json({ verifiedToken })
});

module.exports = router;
