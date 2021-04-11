alert("Escolha a cor baseado no Valor de Referência, e veja a cor do Valor de Resultado")
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var resultado = primeiroValor + segundoValor

var operacao = prompt("Digite 1 para somar: ")

  if (operacao == 1) { var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write ("<h2>Opção inválida</2>")
