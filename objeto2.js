console.log(typeof Object) // função typeof
console.log(typeof new Object) // estanciando uma função, objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

// em JS se cria um objeto/instâncias a partir de uma função ou de uma classe