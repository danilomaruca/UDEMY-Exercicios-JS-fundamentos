const escola = "Cod3r"

console.log(escola.charAt(4)) //letra que está no indice 4 dentro da string
console.log(escola.charAt(5)) //retorna valor vazio
console.log(escola.charCodeAt(3)) //retorna o código relacionado a tablema Unicode relacionado ao indice 3
console.log(escola.indexOf('3')) //retorna o resultado ao indice associado ao digito 3 da palavra

console.log(escola.substring(1)) // retorna os caracteres sem exibir o primeiro indice
console.log(escola.substring(0, 3)) //retorna os caracteres até o indice 3 sem exibi-lo

console.log('Escola '.concat(escola).concat("!")) //une um dado não armazenado com a constante definida 
console.log('Escola ' + escola + "!") //concatena utilizando o sinal +
console.log(escola.replace(3, 'e')) //subistitui o indice 3 pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) //array, separa as strings pelo caractere ','


