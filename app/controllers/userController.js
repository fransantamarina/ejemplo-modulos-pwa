const userService = require('../services/userService')


const register = async (req, res) => {
    const user = { nombre, apellido, correo, password } = req.body;
    const img = req.file;
    await userService.register(user, img)
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
    const { token } = req.query;
    const msg = await userService.confirmRegistration(token);
    res.json({ msg })
};

const saveImage = async (req, res) => {
    try {
        const uidImagen = await userService.createFile(req.file)
        res.json({uidImagen: uidImagen})
    } catch (error) {
        res.json(error)
    }




}

module.exports = { register, confirmRegistration, saveImage }