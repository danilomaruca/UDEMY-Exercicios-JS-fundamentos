function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {                       // throw = lançar (enviar msg de erro)
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {                          // try = tentar (bloco de códigos de erros)
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {                  // capturar e tratar o erro 
        tratarErroELancar(e)
    } finally {                    // bloco executado ocorrendo erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

// Mostrar para o cliente mensagens fáceis de serem entendidos