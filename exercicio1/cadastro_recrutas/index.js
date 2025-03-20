let nome = window.prompt("Insira seu nome: ");
let sobrenome = window.prompt("Insira seu sobrenome: ");
let campo_estudo = window.prompt("Insira seu campo de estudo: ");
let ano_nascimento = window.prompt("Insira seu ano de nascimento: ");

let ano_atual = new Date().getFullYear();
let idade = ano_atual - parseInt(ano_nascimento);

console.log(
  "Recruta cadastrado com sucesso!\n\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campo_estudo +
    "\nIdade: " +
    idade +
    " anos"
);

window.alert(
  "Recruta cadastrado com sucesso!\n\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campo_estudo +
    "\nIdade: " +
    idade +
    " anos"
);
