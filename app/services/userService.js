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
            await sendEmail({ to: correo, subject: "Envio de token para confirmar registro", token });
            if (messageId) {
                return "Revisa tu casilla de correo para continuar con el registro"
            } else {
                return "Hubo un problema con el registro y no se pudo completar, intentá más tarde"
            }


        }
    } catch (error) {
        console.log(error, "ERROR USERSERVICE")
    }

    //Creación de token

    console.log("CORREO: ", correo)

    //Envío de email






    // if (!user) {
    //     
    // } else {
    //     return "El correo ingresado ya se encuentra registrado"
    // }





}

module.exports = { register }