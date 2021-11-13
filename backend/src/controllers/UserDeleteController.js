const User = require('../models/User');

module.exports = {

    async delete(req, res) {

        const { id } = req.params;

        const deleteUser = await User.findOneAndDelete({ _id: id });

        if (deleteUser) return res.json("Excluído com Sucesso!")
        else res.status(401).json({ error: "Não foi encontrado o registro para deletar!" })

    }

}