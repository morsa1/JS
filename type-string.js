const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!"
const StringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Edilson";
console.log(citacao + "Edilson")
console.log(citacao + meuNome + "!!")

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// concatenacao 'String1' + 'String2'



//template string ou template literal

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres