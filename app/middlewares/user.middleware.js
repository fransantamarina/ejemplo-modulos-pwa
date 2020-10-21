const { userSchema } = require('./schemas/user.schema');

exports.validateRegistration = async (req, res, next) => {
    const { error } = await userSchema.create.validate(req.body);    
    error ? res.status(422).json({ message: error.details[0].message }) : next();
}