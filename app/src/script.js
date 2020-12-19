document.login.onsubmit = async e => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    
    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }
    try {
        const resp = await fetch(form.action, options)
        const json = await resp.json()
        if(json.validar == "ok") {
            window.location.href = '/calendario'        
        }
    } catch (e) {
        resultado.innerHTML = e
    }
}

function chamarCadastro() {
    window.location.href = '/cadastrar'
}