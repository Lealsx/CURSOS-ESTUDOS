//ao usar o var, a variável é "içada" para o topo do escopo, mas não é inicializada. 
// Isso significa que a variável é declarada, mas não tem um valor atribuído até que a linha de código seja executada. 
// Portanto, se tentarmos acessar a variável antes de sua declaração, obteremos o valor undefined.
console.log(idade);
var idade = 20;
//var é a unica forma de declarar variáveis que permite a "içamento" (hoisting) em JavaScript.
console.log(idade);