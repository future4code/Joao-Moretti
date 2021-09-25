let operation = process.argv[2]
let number1 = Number(process.argv[3])
let number2 = Number(process.argv[4])

let result = 0

    switch (operation) {
        case 'add':
            result = number1 + number2
            break
        case 'sub':
            result = number1 - number2
            break
        case 'mult':
            result = number1 * number2
            break
        case 'div':
            result = number1 / number2
            break
    }   

    if(operation && number1 && number2) {
    console.log("Resultado: ", result)
    }
    else {
        console.log("Esperava 3 parametros")
    }