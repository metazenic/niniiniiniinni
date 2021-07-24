window.onload = () => {
  llamarPrompt();
};

function esVocal(letra) {
  const vocales = "aeiouáéíóú";
  return vocales.includes(letra);
}

function cambiarPorI(texto) {
  let textoFinal = "";
  for (let caracter of texto) {
    if (esVocal(caracter)) {
      caracter = "i";
    }
    textoFinal += caracter;
  }
  return textoFinal;
}

function llamarPrompt() {
  const parrafo = document.querySelector("#respuesta");
  const imagen = document.querySelector("img");
  const textoIngresado = prompt("ingrisi ti tixti piri trinsfirmirli");

  parrafo.innerHTML = cambiarPorI(textoIngresado);
  imagen.src = "https://i.imgflip.com/2uag15.png?a451971";
  imagen.alt = "mocking kid";
}
