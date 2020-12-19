const User = require("./db/Models/User")
const bcrypt = require('bcryptjs')


module.exports = app => {

    async function validarLogin(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select('+password')

        if (!user)
            return res.status(400).send({ error: "User not found" })

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' })

        return res.json({"validar":"ok"})
    }

    app.post('/validarlogin', validarLogin)

    return validarLogin
}