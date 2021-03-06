const userRepository = require('../repositories/userRepository')
const { createToken, verifyToken } = require('../utils/token')
const { sendEmail } = require("../utils/mailSender")


const register = async (user) => {
    //Se busca el usuario por email y si se encuentra se devuelve mensaje de email en uso
    try {
        const foundUser = await userRepository.findUserByEmail(user.correo)
        if (foundUser) {
            return "El email ingresado ya está en uso"
        } else {
            await userRepository.createUser(user)
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




module.exports = { register, confirmRegistration }