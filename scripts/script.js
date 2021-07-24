window.onload = () => {
    const formulario = document.forms.formTexto
    
    formulario.addEventListener("submit", e => {
        e.preventDefault();
        
        const textoTransformar = formulario.texto.value
        const respuesta = document.querySelector("#respuesta")
        const img = document.querySelector("img")
        
        respuesta.innerHTML = cambiarPorI(textoTransformar)

        img.src = "https://i.imgflip.com/2uag15.png?a451971"
        img.alt = "mocking kid"
    })
}

function esVocal(letra) {
    const vocales = "aeiouáéíóú"
    return vocales.includes(letra)
}

function cambiarPorI(texto) {
    let textoFinal = ""
    for (let caracter of texto) {
        if (esVocal(caracter)) {
            caracter = "i"
        }
        textoFinal += caracter
    }
    return textoFinal
}