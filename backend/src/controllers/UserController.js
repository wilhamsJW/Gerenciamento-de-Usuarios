const User = require('../models/User'); //importando o schema, aí se encontra o email ou todos os registros de um cliente de cadastro

// User Creation
module.exports = {
    async store(req, res) {

        const { name, location, age } = req.body;

        //  Validation for not creating user with same email
        let user = await User.findOne({ name: name });

        if (!user) {
            user = await User.create({ name, location, age });
            res.json({user, msg: "Usuário criado com sucesso!"})
        } else {
            res.json({user, msg: "Usuário já adicionado!"})
        }

    }
};