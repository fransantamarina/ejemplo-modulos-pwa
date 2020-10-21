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

const confirmRegistration = async (req, res) => {
    const {token} = req.query;    
    const msg = await userService.confirmRegistration(token);
    res.json({msg})
};

module.exports = {register, confirmRegistration}