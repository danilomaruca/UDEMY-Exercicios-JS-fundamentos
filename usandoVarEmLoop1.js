/* pelo fato da palavra reservada "var" não ter escopo de bloco, 
o 'i' estará visível dentro e fora do bloco*/

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)