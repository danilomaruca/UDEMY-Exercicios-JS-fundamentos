/* nos operadores relacionais o resultado sempre será verdadeiro ou falso
   devido a linguagem ser de tipagem fraca, na hora de comparar é preciso saber se quer comparar os valores 
   ou se é estritamente igual entre valores e tipos 
*/
console.log('01)', '1' == 1) // == operador que compara igualdade entre duas coisas
console.log('02)', '1' === 1) // === estritamente igual comprarando valores (número) e tipos (string)
console.log('03)', '3' != 3) // != simplesmente diferente
console.log('04)', '3' !==3) // !== estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// === é mais indicado para evitar usar tipos diferentes 