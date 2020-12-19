const Agendamento = require('./db/Models/Agendamento.js')

module.exports = app => {

    async function ListarAgenda (req, res) {
        const query = await Agendamento.find({$and:[{cadastrarAgendamento: {$exists: true} },{cliente: {$exists: true}}]})
        let dados = query.map(i => {
            const d = {}
            d.data = new Date(i.cadastrarAgendamento).toLocaleString()
            d.cliente = i.cliente
            let u = d.data.split(' ')
            let t = u[0].split('-')
            let t2 = [...t]
            t[0] = t2[2]
            t[2] = t2[0]
            d.data = t.join('/')
            d.data = `${d.data} ${u[1]}`
            return d
        })
        const dadosFinal = []
        for (let d in dados) {
            dadosFinal.push( dados[d] )
        }
        res.send(dadosFinal)
    }

    app.get('/ListarAgenda', ListarAgenda)

    return ListarAgenda
}