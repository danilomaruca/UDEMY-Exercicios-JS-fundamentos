// hoisting quer dizer jogar pra cima ou içar, mover a declaração para o topo
console.log('a =', a)
var a = 2
console.log('a =', a)

/* o código final seria:
var = 2
console.log('a =', a)
a = 2
console.log('a =', a)
*/

console.log('b =', b)
let b = 2    // usando a palavra resercada let não ocorre o efeito hoisting
console.log('b =', b)
