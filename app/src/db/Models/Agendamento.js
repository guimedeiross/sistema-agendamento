const mongoose = require('../dbConnection.js')

const AgendamentoSchema = new mongoose.Schema({
    cadastrarAgendamento: {
        type: Date,
        required: true,
    },
    cliente: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema)

module.exports = Agendamento