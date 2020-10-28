const userRepository = require('../repositories/userRepository')
const { createToken, verifyToken } = require('../utils/token')
const { sendEmail } = require("../utils/mailSender")
const { saveImg, savePDF } = require('./../utils/fileHandler');


const register = async (user, img) => {
    //Se busca el usuario por email y si se encuentra se devuelve mensaje de email en uso
    try {
        const foundUser = await userRepository.findUserByEmail(user.correo)
        if (foundUser) {
            return "El email ingresado ya está en uso"
        } else {
            const uid = saveImg(img)
            console.log("IMG UID = ", uid)
            user.imgReference = uid;
            await userRepository.createUser(user)
            //insertar en la tabla correspondiente el uid usuario
            const token = createToken({ uidCorreo })

            //Envio de email
            try {
                await sendEmail({ to: correo, subject: "Envio de token para confirmar registro", token });
                console.log(messageId)
                return "Revisa tu casilla de correo para continuar con el registro"
            } catch (error) {
                console.log("Error en el envio de emails: ", error)
                return "Hubo un problema con el registro y no se pudo completar, intentá más tarde"
            }
        }
    } catch (error) {
        console.log("ERROR USERSERVICE-REGISTER", error)
    };
};

const confirmRegistration = async (token) => {
    try {
        const { uidCorreo } = verifiedToken = await verifyToken(token);
        const { nombre } = await userRepository.findUserByUid(uidCorreo);
        if (!nombre) {
            return "No se encontro el usuario"
        } else {
            const result = await userRepository.authenticateUser(uidCorreo)
            console.log("RESULTADO DE UPDATE", result)


            return `Gracias por registrarte, ${nombre}`
        }
    } catch (error) {
        console.log(error);
        return "Error al confirmar el token en Servicio usuario"
    }

}


//prueba subida de archivos
const createFile = (fileObj) => {
    console.log("File en userService ", fileObj)
    const uid = saveImg(fileObj)
    return uid;
}





module.exports = { register, confirmRegistration, createFile }