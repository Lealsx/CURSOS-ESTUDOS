/*
//Para rodar o JS, precisamos acessar o terminal do VS Code e digitar o comando "node script.js" para executar o arquivo.
console.log("Hello, World!");
// existem diferentes maneiras de declarar variáveis em JavaScript, como var, let e const.
// var é usado para declarar variáveis que podem ser reatribuídas, a forma antiga de declarar variáveis em JavaScript.
var nome = "João";
// let é usado para declarar variáveis que podem ser reatribuídas, a nova forma de declarar variáveis em JavaScript.
let idade = 25;
// const é usado para declarar variáveis que não podem ser reatribuídas.
const PI = 3.14;
// ao pedir o tipo de dado de uma variável, o JavaScript retorna o tipo de dado da variável.
let EstaChovendo = true;
//aqui estamos declarando uma variável sem atribuir um valor a ela, o que significa que ela é undefined.
let cidade


console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof PI); // number
console.log(typeof EstaChovendo); // boolean
console.log(typeof cidade); // undefined
console.log(typeof null); // object
*/
//1
let nome = "João";
console.log(`Olá, ${nome}! Bem-vindo ao nosso site.`);
//2
let idade = 25;
console.log(`Você tem ${idade} anos.`);
//3
let cidade = "São Paulo";
let estado = "SP";
let pais = "Brasil";
console.log(`Você mora em ${cidade}, ${estado}, ${pais}.`);
//4
let temCarteira = true;
console.log(typeof temCarteira); // boolean
//5
let saldoInicial = 0;
console.log(saldoInicial); // 0
saldoInicial += 200;
console.log(saldoInicial); // 200
saldoInicial -=  50;
console.log(saldoInicial); // 150
