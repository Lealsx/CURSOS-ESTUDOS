//na forma prefixada, o operador de incremento é aplicado antes da variável ser usada na expressão. Isso significa que a variável é incrementada primeiro e, em seguida, seu valor atualizado é usado na expressão.
let contador = 5;
console.log(++contador);
//na forma pós-fixada, o operador de incremento é aplicado depois que a variável é usada na expressão. Isso significa que o valor atual da variável é usado na expressão e, em seguida, a variável é incrementada.
let contador = 5;
console.log(contador++);
//aqui ele irá imprimir 5, mas a variável contador será incrementada para 6 após a execução da linha de código.
let a = 3
let b = a++ + 2;
//aqui ele irá imprimir 5, mas a variável a será incrementada para 4 após a execução da linha de código.
let a = 3
let b = ++a + 2;