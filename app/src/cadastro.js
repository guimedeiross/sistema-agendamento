const divResp = document.querySelector('#resp')

document.cadastrarForm.onsubmit( async e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const options = {
        method: form.method,
        body: data
    }
    try {
        await fetch(form.action, options)
    } catch (e) {
        //divResp.innerHTML = e
    }
})