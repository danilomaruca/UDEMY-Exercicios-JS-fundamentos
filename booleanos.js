let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //2x !!(negação) = verdadeiro / 1x ! = falso

// situaçãoes que resolvem para verdadeiro
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//situações que resolvem para falso
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//expressão lógica OU
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

//exemplo
let nome = 'Lucas'
console.log(nome || 'Desconhecido')