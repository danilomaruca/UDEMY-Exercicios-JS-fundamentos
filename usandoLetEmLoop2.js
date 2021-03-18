const funcs = [] // array

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

// uma função tem conciência do local que ela foi definida