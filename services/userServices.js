const userModel = require("../models/User");

exports.createUser = async (user) => {
    return await userModel.create(user);
}