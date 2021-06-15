//          exercicio 1 
//a - false
//b - false
//c - true
//d - Boolean

//          exercicio 2
//Não será feita a soma, pois o prompt reconhece as variaveis como string

//          exercicio 3
//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))


 //          exercicio 1 codigo

 let idade = Number(prompt("Qual é sua idade: "))
 let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo: "))

 console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)

 console.log("Diferença entre as idades: ", idade - idadeMelhorAmigo)


 //          exercicio 2 codigo

 let numero = Number(prompt("Coloque um numero par: "))

 console.log(numero % 2)
 //O resultado vai ser 0, pois todo numero par divido por 2 resulta em resto 0
 //Ao colocar um numero impar é retornado o numero 1, pois todo impar dividido por 2 resulta em resto 1


 //          exercicio 3 codigo

 let anos = Number(prompt("Quantos anos voce tem ?"))

 console.log("Sua idade em meses é:", anos*12)
 console.log("Sua idade em dias é:", anos*365)
 console.log("Sua idade em horas é:", anos*8640)


 //          exercicio 4 codigo

 let numero1 = Number(prompt("Digite um Numero: "))
 let numero2 = Number(prompt("Digite outro Numero: "))

 console.log("O primeiro numero é maior que o segundo?", numero1>numero2)
 console.log("O primeiro numero é igual ao segundo?", numero1===numero2)
 console.log("O primeiro numero é divisivel pelo segundo?", numero1%numero2 === 0)
 console.log("O segundo numero é divisivel pelo primeiro?", numero2%numero1 === 0)






 
