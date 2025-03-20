let name1 = prompt("Insira o nome do jogador 1: ");
let hp1 = prompt("Insira os pontos de vida do " + name1);
let power1 = prompt("Insira a força do " + name1);
let confirm1 = confirm("O " + name1 + " possui escudo?");
let shield1;

if (confirm1 == true) {
  shield1 = prompt("Insira o valor da defesa do escudo");
} else {
  alert("O valor de defesa é 0 por não possuir escudo.");
  shield1 = 0;
}

let name2 = prompt("Insira o nome do jogador 2: ");
let hp2 = prompt("Insira os pontos de vida do " + name2);
let power2 = prompt("Insira a força do " + name2);
let confirm2 = confirm("O " + name2 + " possui escudo?");
let shield2;

if (confirm2 == true) {
  shield2 = prompt("Insira o valor da defesa do escudo");
} else {
  alert("O valor de defesa é 0 por não possuir escudo.");
  shield2 = 0;
}

let confirm_atk = confirm(
  "Selecione ¨OK¨ para selecionar " +
    name1 +
    " para atacar\n" +
    "Ou\n" +
    "Selecione ¨Cancel¨ para selecionar " +
    name2 +
    " para atacar"
);

if ((confirm_atk = true)) {
} else if ((confirm2 = true)) {
  window.alert("Dano que o " + name2 + "foi atingido: " + damage1);
} else {
  window.alert(name2 + "Recebeu ataque direto, resultando: " + direct1 + " PV");
}

let real_power1 = power1 - shield2;
let damage1 = hp2 - real_power1;
let direct1 = hp2 - power1;

console.log(
  "Nome dos jogadores: " +
    "\n Jogador 1: " +
    name1 +
    "\n Jogador 2: " +
    name2 +
    "\n\n Força dos jogadores: " +
    "\n Jogador 1: " +
    power1 +
    "\n Jogador 2: " +
    power2 +
    "\n\n Defesa dos jogadores: " +
    "\n Jogador 1: " +
    shield1 +
    "\n Jogador 2: " +
    shield2 +
    "\n\n Pontos de vida dos jogadores: " +
    "\n Jogador 1: " +
    "hi " +
    "\n Jogador 2: " +
    damage1 || direct1
);
