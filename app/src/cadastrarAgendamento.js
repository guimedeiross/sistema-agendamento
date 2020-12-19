const Agendamento = require('./db/Models/Agendamento.js')

module.exports = app => {

    async function cadastrarAgendamento (req, res) {

        const { cadastrarAgendamento, cliente } = req.body 
        const data = new Date(cadastrarAgendamento).toLocaleString()
        if(data < new Date().toLocaleString()) {
            return res.status(400).send({ error: "Não pode ser uma data ou horário passado!!" })
        }
        try {
            if (await Agendamento.findOne({ cadastrarAgendamento: data }) || cliente === '') {
                return res.status(400).send({ error: "Data já agendada ou campo cliente não preenchido" })
            }
            await Agendamento.create({cadastrarAgendamento: data, cliente})
            res.redirect('http://localhost:3000/listarAgenda.html')
        } catch {
            res.status(400).send({ error: "Falha ao Cadastrar" })
        }
    }

    app.post('/cadastrarAgendamento', cadastrarAgendamento)

    return cadastrarAgendamento
}