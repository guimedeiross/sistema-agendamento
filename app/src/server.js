const bodyParser = require('body-parser')
const express = require('express')

const app = express()


app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000, () => console.log('Executando...'))

app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname + "/cadastro.html")
})

app.get('/calendario', (req, res) => {
    res.sendFile(__dirname + "/calendario.html")
})

require('./cadastrarUser')(app)
require('./validarLogin')(app)
require('./cadastrarAgendamento')(app)
require('./ListarAgenda')(app)