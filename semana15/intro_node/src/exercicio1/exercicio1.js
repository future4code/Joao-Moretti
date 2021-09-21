// Exercicio 1
// A - Através do process.argv

// B :

const nome = process.argv[2]
let idade = Number(process.argv[3])

if (nome && idade) {
console.log("Olá,", nome,"voce tem", idade,"anos. Em sete anos voce terá", idade + 7)
}
else {
    console.log("Esperava 2 parametros")
}