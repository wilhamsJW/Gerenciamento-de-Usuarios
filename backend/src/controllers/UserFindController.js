const User = require('../models/User')

module.exports = {

    async read(req, res) {
        // Buscando todas as informações no database 
        const userList = await User.find();

        return res.json(userList)

    }

}