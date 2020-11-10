document.login.onsubmit = async e => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    
    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }
    try {
        await fetch(form.action, options)
    } catch (e) {
        resultado.innerHTML = e
    }
}

function chamarCadastro() {
    window.location.href = '/cadastrar'
}