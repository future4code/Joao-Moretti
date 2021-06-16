//           exercicio 1
// 
// a - undefined
// b - null
// c - 11
// d - 3
// e - 19
// f - 9

//           exercicio 2

// SUBI NUM ONIBUS EM MIRROCOS 27


//           exercicio 1 codigo

 let nome = prompt("Digite seu nome: ")
 let email = prompt("Digite seu email: ")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}!`)

//           exercicio 2 codigo

let comidas = ["queijo", "pizza", "pastel", "abacaxi", "doce" ]

console.log(comidas)
console.log(`Essas sao minhas comidas preferidas :
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}
`)

let comidaUsuario = prompt("Digite sua comida preferida: ")
comidas[1] = comidaUsuario

console.log(comidas)

//           exercicio 3 codigo

let listaDeTarefas = []

listaDeTarefas[0] = prompt("Digite uma tarefa: ") 
listaDeTarefas[1] = prompt("Digite uma tarefa: ") 
listaDeTarefas[2] = prompt("Digite uma tarefa: ") 

console.log(listaDeTarefas)

let i = 0

i = prompt("Digite o indice", i)
listaDeTarefas.splice(i,1)
console.log(listaDeTarefas)