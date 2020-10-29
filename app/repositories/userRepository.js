const { User, Image } = require("../models/index");

module.exports = {

    async createUser(user) {
        await User.create(user)
            .then((user) => {
                return { correo, uidCorreo, id } = user.dataValues
            }).catch((err) => {
                console.log(err)
            });
    },

    async findUserByEmail(correo) {
        return await User.findOne({
            where: { correo }
        });
    },

    // async findUserByUid(uidCorreo) {
    //     return await User.findOne({
    //         where: { uidCorreo },                     
    //     });
    // },


    /*Devuelve solo el nombre del usuario si encuentra uno*/
    async findUserByUid(uidCorreo) {
        const { nombre } = dataValues = await User.findOne({
            where: { uidCorreo },
            attributes: ['nombre']
        });
        return { nombre };
    },

    async findUserById(id) {
        return await User.findByPk(id);
    },

    async authenticateUser(uidCorreo) {
        return await User.update({ habilitado: true }, {
            where: { uidCorreo },
        });
    }
}

