var valor = document.getElementById("valor");
var prazo = document.getElementById("prazo");
var jaa = document.getElementById("jurosaa");
var divres = document.getElementById("resultado");
var btn = document.getElementById("btnSimular");

var prazoMeses, jurosam, amortizacao;
var jurosAcumulado = 0;
var jurosMensal = new Array(prazoMeses);
var total;

btn.addEventListener("click", function simularFinanciamento() {
  prazoMeses = prazo.valueAsNumber * 12;
  jurosam = Math.pow(1 + jaa.valueAsNumber, 1 / 12) - 1;
  amortizacao = valor.valueAsNumber / prazoMeses;

  var newInput = document.createElement("input");
  var newP = document.createElement("p");
  var newH2 = document.createElement("h2");

  newH2.innerHTML = "<br>Resultado<br>";
  newP.innerHTML = "Prazo (meses)";
  newInput.value = prazoMeses;
  divres.appendChild(newH2);
  divres.appendChild(newP);
  divres.appendChild(newInput);

  var newInput = document.createElement("input");
  var newP = document.createElement("p");
  newP.innerHTML = "Juros ao mês";
  newInput.value = jurosam;
  divres.appendChild(newP);
  divres.appendChild(newInput);

  //CALCULO DO JUROS ACUMULADO
  calcularJurosAcumulado();

  var newInput = document.createElement("input");
  var newP = document.createElement("p");
  newP.innerHTML = "Juros acumulado";
  newInput.value = jurosAcumulado.toFixed(2);
  divres.appendChild(newP);
  divres.appendChild(newInput);

  criarTabela();

  for (var i = 0; i < 0; i++) {
    console.log(i);
  }
});

function calcularJurosAcumulado() {
  for (var i = 0; i < prazoMeses; i++) {
    jurosMensal[i] = jurosam * (prazoMeses - i) * amortizacao;
    jurosAcumulado += jurosMensal[i];
  }
}

function criarTabela() {
  var table = document.createElement("table");
  var head = document.createElement("thead");
  //   var newTr = document.createElement("tr");
  //   var newTh = document.createElement("th");
  var body = document.createElement("tbody");

  head.innerHTML =
    "<tr><th>Prestaçao</th><th>Amortização</th><th>Juros</th><th>Total</th></tr>";

  var i = 0;
  while (i < 5) {
    total = jurosMensal[i] + amortizacao;
    var linha = document.createElement("tr");
    linha.innerHTML =
      "<td>" +
      (i + 1) +
      "</td><td>" +
      amortizacao.toFixed(2) +
      "</td><td>" +
      jurosMensal[i].toFixed(2) +
      "</td><td>" +
      total.toFixed(2) +
      "</td>";
    body.appendChild(linha);
    i++;
  }
  table.appendChild(head);
  table.appendChild(body);
  divres.appendChild(table);
}
