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
    numerosPorCotas.value === ""
  ) {
    alert("Campo não pode ser vazio");
  } else {
    for (let j = 0; j <= quantidadeDeCotasSolicitadas.value - 1; j++) {
      for (let i = 0; i < numerosPorCotas.value; i++) {
        let numero = parseInt(Math.random() * 60);
        cota.push(numero);
      }
      const newLine = document.createElement("li");
      listaCotas.appendChild(newLine);
      newLine.innerHTML = cota.join(" ");
      cota = [];
    }
  }
});
