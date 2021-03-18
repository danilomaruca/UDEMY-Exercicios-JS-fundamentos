// variáveis definidas com a palavra reservada "let" tem escopo global, de função e de bloco
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // preferencia 
}
console.log('fora =', numero)