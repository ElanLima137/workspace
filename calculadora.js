function calcular() {
  const campo1 = parseFloat(document.getElementById("campo1").value) || 0;
  const campo2 = parseFloat(document.getElementById("campo2").value) || 0;
  const modo = document.getElementById("modo").value;

  const fatores = {
    "017": 0.30,
    "2b84": 0.28,
    "2e02": 0.32,
  };

  const soma = campo1 + campo2;
  const fator = fatores[modo] || 0;
  const resultado = Math.ceil(soma * fator);

  document.getElementById("resultadof").innerText = "Resultado: " + resultado;
}

document.getElementById("campo1").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // evita o submit ou comportamento padrão
    document.getElementById("campo2").focus(); // pula para campo2
  }
});

document.getElementById("campo2").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("modo").focus(); // pula para select
  }
});

document.getElementById("modo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("button").focus(); // pula para o botão
  }
});