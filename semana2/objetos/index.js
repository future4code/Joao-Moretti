//     exercicio 1

// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario : "14h"

//     exercicio 2
// A-
// nome :"Juca", idade: 3, raca: "SRD"  
// nome :"Juba", idade: 3, raca: "SRD"
// nome :"Jubo", idade: 3, raca: "SRD"
// B-
//Copia o conteúdo do objeto escolhido

//     exercicio 3
// A-
// false
// undefined
// B-Foi por que nao existe uma proprieda altura no objeto pessoa
//----------------------------------------------------------------------
//     exercicio 1 codigo
function nomes(objeto,name,apelido){
    console.log(`Eu sou ${objeto[name]}, mas pode me chamar de : ${objeto[apelido]}`)
}

const pessoa = {

    nome: "joao",
    apelidos: ["jp", "stuart", "kook"]
   
}

nomes(pessoa, "nome", "apelidos")

const novaPessoa = {
    ...pessoa,
    apelidos: ["jota", "lerdo", "wiily"]

}

nomes(novaPessoa, "nome", "apelidos")

//     exercicio 2 codigo
function array(objeto){

    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]

}

const pessoa1 = {
    nome: "joao",
    idade: 19,
    profissao: "estudante" 
}

const pessoa2 = {
    nome: "pedro",
    idade: 22,
    profissao: "social media"
}



console.log(array(pessoa1))
console.log(array(pessoa2))

//     exercicio 3 codigo
let carrinho = []

function compras(objeto){
   return carrinho.push(objeto)

}

const fruta = {

    nome: "banana",
    disponibilidade : true

}

const frutas = {

    nome: "laranja",
    disponibilidade : true

}

const frutass = {

    nome: "abacaxi",
    disponibilidade : true

}
compras(fruta)
compras(frutas)
compras(frutass)
console.log(carrinho)