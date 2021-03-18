/* v e v -> v 
 * v e f -> f
 * f e ? -> f
 * 
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 * OU EXCLUSIVO (OBRIGATORIAMENTE OS DOIS TEM QUE SER DIFERENTES) 
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 * NEGAÇÃO LÓGICA
 * !v -> f
 * !v -> v
 */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = OU
    const comprarTv50 = trabalho1 && trabalho2 // && = E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // != = OU EXCLUSIVO
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } /* novo recurso ES2015, 
                                                                           omitir a chave ou atributo para criação do objeto*/
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))