const { User } = require("../models/index");

module.exports = {

    async createUser(nombre, apellido, correo, password) {
        try {
            return await User.create({ nombre, apellido, correo, password });
        } catch (error) {
            return error
        }
    },

    async findUserByEmail(correo) {
        return await User.findOne({
            where: { correo }
        });
    },

    async findUserById(id) {
        return await User.findByPk(id);
    }
}

