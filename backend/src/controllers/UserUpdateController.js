const User = require('../models/User')

module.exports = {

    async update(req, res) {

        const { id } = req.params;

        const { name, location, age } = req.body;

        if (!name && !location && !age) return res.json({msg: "Não há alterações a serem feita!"})

        if (name || location || age) {

            var updateUser = await User.findOne({ _id: id });

            if
            (
                updateUser.name == name &&
                updateUser.location == location &&
                updateUser.age == age 
            ) return res.json({ msg: "Não há alterações a serem feita!" })

            updateUser.name = name || updateUser.name;
            updateUser.location = location || updateUser.location;
            updateUser.age = age || updateUser.age;

            await updateUser.save();
            return res.json("Alteração feita com Sucesso!!!");

        }

    }

}