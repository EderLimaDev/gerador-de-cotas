const listaCotas = document.getElementById("cotas-geradas");
const btn = document.getElementById("btn-cotas");

const quantidadeDeCotasSolicitadas = document.getElementById(
  "quantidade-solicitada"
);
const numerosPorCotas = document.getElementById("numeros-por-cota");

let cota = [];

btn.addEventListener("click", () => {
  if (
    quantidadeDeCotasSolicitadas.value === "" ||
    numerosPorCotas.value === "" ||
    quantidadeDeCotasSolicitadas.value <= 0 ||
    numerosPorCotas.value <= 0
  ) {
    alert("Digite um número válido em ambos os campos");
  } else {
    for (let j = 0; j <= quantidadeDeCotasSolicitadas.value - 1; j++) {
      for (let i = 0; i < numerosPorCotas.value; i++) {
        let numero = Math.round(Math.random() * 60) + 1;
        cota.push(numero.toString().padStart(2, "0"));
      }
      const newLine = document.createElement("li");
      listaCotas.appendChild(newLine);
      newLine.innerHTML = cota.join(" - ");
      cota = [];
    }
  }
});
