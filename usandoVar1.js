// variáveis definidas com a palavra reservada "var" tem escopo global e de função
{ 
    { 
        { 
            { 
                var sera = 'Será???' // variável global, pode ser acessada de qualquer lugar (não aconselhável)
                console.log(sera) 
            }
        } 
    } 
}
console.log(sera)

function teste() {
    var local = 123 // variável var dentro da função é visível somente dentro da função
    console.log(local) 
}

teste()
console.log(local)