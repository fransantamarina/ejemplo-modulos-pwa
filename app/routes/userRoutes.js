const express = require('express');
const router = express.Router();
const userService = require('../services/userService')

const register = async (req, res) => {
    const user = { nombre, apellido, correo, password } = req.body;
    await userService.register(user)
        .then(result => {
            if (result) {
                res.json(result)
            }
        }).catch(err => {
            console.log("ERROR RUTA REGISTER:", err)
            res.status(500).json(err.message)
        })
};










/* POST users registration. */
router.post('/register', register);

module.exports = router;
