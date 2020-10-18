const { User } = require("../models/index");

module.exports = {

    async createUser(user) {
        await User.create(user)
            .then((user) => {
                return { correo, uidCorreo } = user.dataValues
            }).catch((err) => {
                console.log(err)
            });
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

