let elementAnosLuz = document.querySelector("#dis-luz");
let elementMetodo = document.querySelector("#metodo");
let anos = document.querySelector("#anos");
let conversao = document.querySelector("#conversao");
let resultado = document.querySelector("#resultado");

function execulta() {
  let valueAnosLuz = elementAnosLuz.value;
  let valueMetodo = elementMetodo.value;
  let ResultadoConversao;

  switch (valueMetodo) {
    case "Parsec":
      ResultadoConversao = valueAnosLuz * 0.306601;
      break;
    case "UnidadeAstronomica":
      ResultadoConversao = valueAnosLuz * 63241.1;
      break;
    case "Quilometros":
      ResultadoConversao = valueAnosLuz * 9.5 * Math.pow(10, 12);
      break;
    default:
      ResultadoConversao = valueAnosLuz;
  }

  anos.innerHTML = valueAnosLuz;
  conversao.innerHTML = valueMetodo;
  resultado.innerHTML = ResultadoConversao;
}

elementAnosLuz.addEventListener("input", () => {
  execulta();
});

elementMetodo.addEventListener("input", () => {
  execulta();
});
