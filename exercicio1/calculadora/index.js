window.alert("Bem vindo à calculadora!");

let number1 = parseFloat(window.prompt("Digite o primeiro número:"));
let number2 = parseFloat(window.prompt("Digite o segundo número:"));

let resultado_soma = number1 + number2;
let resultado_substracao = number1 - number2;
let resultado_multiplicacao = number1 * number2;
let resultado_divisao = number1 / number2;

console.log(
  "Resultados obtidos: \n" +
    "\n Soma: " +
    resultado_soma +
    "\n Substração: " +
    resultado_substracao +
    "\n Multiplicação: " +
    resultado_multiplicacao +
    "\n Divisão: " +
    resultado_divisao
);

window.alert(
  "Resultados obtidos: \n" +
    "\n Soma: " +
    resultado_soma +
    "\n Substração: " +
    resultado_substracao +
    "\n Multiplicação: " +
    resultado_multiplicacao +
    "\n Divisão: " +
    resultado_divisao
);
