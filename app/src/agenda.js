const pegarLista = async () => {
    const tabela = document.createElement("table")
    const tHead = document.createElement("thead")
    const tBody = document.createElement("tbody")
    tHead.innerHTML = "<tr><td>Cliente</td><td>Data Agendada</td></tr>"
    tabela.classList.add("tabela")
    tabela.appendChild(tHead)
    const res = await fetch('http://localhost:3000/listarAgenda')
    const json = await res.json()
    const dados = Object.values(json)
    dados.forEach(i => {
        tBody.innerHTML += `<tr><td>${i.cliente}</td><td>${i.data}</td></tr>`
    })
    tabela.appendChild(tBody)
document.querySelector('body').append(tabela)
}
pegarLista()