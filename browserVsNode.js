let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca sem var e let!
abc = 3 // não faça isso em casa!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }

/*É preciso conhecer o local no qual está executando o JS
 *existem várias formas de programar com JS, por isso é importante conhecer o local (runtime)
 *entender as especifidades de cada ambiente, padrão dos projetos, paradigmas
 *fuja do escopo global, não colocar variáveis no escopo global utilizar sempre constantes
*/