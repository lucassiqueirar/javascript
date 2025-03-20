let car1 = prompt("Insira o nome do veículo 1: ");
let car2 = prompt("Insira o nome do veículo 2: ");

let vel1 = prompt("Insira a velocidade do veículo 1: ");
let vel2 = prompt("Insira a velocidade do veículo 2: ");

if (vel1 > vel2) {
  alert("Veículo 1 " + car1 + " é mais rápido");
} else if (vel2 > vel1) {
  alert("Veículo 2 " + car2 + " é mais rápido");
} else {
  alert("A velocidade dos dois carros " + car1 + " e " + car2 + " são iguais");
}
