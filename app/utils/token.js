const { sign, verify } = require("jsonwebtoken");
const fs = require("fs");
const publicKey = fs.readFileSync("./app/keys/public.pem");
const privateKey = fs.readFileSync("./app/keys/private.pem");

const signOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
};

module.exports.createToken = (payload) => {
    try {
        return sign(payload, privateKey, signOptions);
    } catch (error) {
        console.log(error);
        return "Error al crear el token";
    }
};
module.exports.verifyToken = (token) => {
    try {
        return verify(token, publicKey)
    } catch (error) {
        console.log(error);
        return "Error al verificar el token"
    }
};
