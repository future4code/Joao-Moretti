//1- 10,5
//2- 10,10,10
//3- O programa calcula o resultado da divisao, e retorna o salario por hora do usuario
//let p poderia ser horasTrabalhadas
//let t poderia ser salarioPorDia 

let nome
let idade 

console.log("type da variavel nome : ", typeof nome)
console.log("type da variavel idade : ",typeof idade)
//quando nao se define o tipo da variavel(number ou string), ele fica como undefined

nome = prompt("Diga o seu nome : ")
idade = prompt("Diga a sua idade : ")

console.log("seu nome : ", nome)
console.log("sua idade : ", idade)

console.log("novo type de nome - ",typeof nome)
console.log("novo type de idade - ",typeof idade)
//a variavel idade tambem foi considerado string

console.log("Olá",nome,",voce tem", idade, "anos")

let resposta1 
let resposta2
let resposta3

resposta1 = prompt("Voce está usando uma roupa vermelha hoje?")
resposta2 = prompt("Voce está usando uma roupa azul hoje?")
resposta3 = prompt("Voce está usando uma roupa branca hoje?")

console.log("Você está usando uma roupa vermelha hoje?", resposta1)
console.log("Você está usando uma roupa azul hoje?", resposta2)
console.log("Você está usando uma roupa branca hoje?", resposta3)

let a = 10
let b = 25
let c

console.log("a :", a)
console.log("b :", b)

c = a
a = b 
b = c

console.log("o novo valor de a eh :", a)
console.log("o novo valor de b eh :", b)