const User = require('./db/Models/User')

module.exports = app => {

    async function cadastrarUsuario (req, res) {

        const { email } = req.body
        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({ error: "Usuario ja existe" })
            }
            
            const user = await User.create(req.body)
            user.password = undefined        
            res.send({ email : "Usuario Cadastrado com Sucesso" })
        } catch {
            res.status(400).send({ error: "Falha ao Cadastrar" })
        }
    }

    app.post('/cadastrar', cadastrarUsuario)

    return cadastrarUsuario
}