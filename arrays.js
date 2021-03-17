const valores = [7.7, 8.9, 6.3, 9.2] //nunca utilizar variáveis de forma genérica, utilizar sempre nomes relacionados ao projeto
console.log(valores[0], valores[3]) //exibe elementos de 0 a 3 sem exibir o indice 3
console.log(valores[4]) //valor indefinido

//adiciona ou altera elementos ao objeto
valores[4] = 10
console.log(valores)
console.log(valores.length) //exibe qtdade de elementos tem no array

//adicionar novos elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//retirar atributos de um objeto
console.log(valores.pop())
delete valores[0]
console.log(valores)

//exibe o tipo do array
console.log(typeof valores)