// ----------exercicio-1----------
// a- 2 x 5 = 10 \ 10 x 5 = 50
// b- nao aparece nada

// ----------exercicio-2----------
// a- vai retornar o texto minusculo e verificar se tem a palavra cenoura na string 
// b- I - eu gosto de cenoura / true
// II - cenoura e bom pra vista / true
// III - cenouras crescem na terra / true

// ----------exercicio-1-codigo----------
function frase(){
    console.log("Eu sou João, tenho 19 anos, moro no Rio de Janeiro e sou estudante")

}

frase()

function frase2(nome,idade,cidade,profissao){
    const infos = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

    return infos
}

let seuNome = prompt("Diga seu nome: ")
let suaIdade = prompt("Diga sua idade: ")
let suaCidade = prompt("Diga sua cidade: ")
let suaProfissao = prompt("Diga sua profissao: ")

let texto = frase2(seuNome,suaIdade,suaCidade,suaProfissao)

console.log(texto)

// ----------exercicio-2-codigo----------
function soma(nmr1, nmr2){

       return nmr1 + nmr2
}

function booleano(n1, n2){
    const resposta = console.log(`${n1} é maior do que ${n2}?`, n1>n2)

    return resposta
}

function par(verificarPar){
    const resultado = console.log(`${verificarPar} é par?`, (verificarPar % 2)===0)

    return resultado
}

function string(mensagem){
    const r = console.log(mensagem.length, mensagem.toUpperCase())

    return r
}

let numero1 = Number(prompt("Digite um numero"))
let numero2 = Number(prompt("Digite um numero"))
console.log('soma: ', soma(numero1,numero2))

let nu1 = Number(prompt("Digite um numero: "))
let nu2 = Number(prompt("Digite um numero: "))

console.log(booleano(nu1,nu2))

let talvezPar = Number(prompt("Digite um numero: "))
console.log(par(talvezPar))

let mensagem1 = prompt('Digite uma frase: ')
console.log(string(mensagem1))

// ----------exercicio-3-codigo----------
function somar(nmr1,nmr2){
    resu = nmr1 + nmr2
    console.log('soma: ',resu)
    return resu
}

function subtracao(nmr1,nmr2){
    resu = nmr1 - nmr2
    console.log('subtraçao: ',resu)
    return resu
}

function multiplicacao(nmr1, nmr2){
    resu = nmr1 * nmr2
    console.log('multiplicaçao: ',resu)
    return resu
}

function divisao(nmr1, nmr2){
    resu = nmr1 / nmr2
    console.log('divisao: ',resu)
    return resu
}

let opcao1 = Number(prompt("Digite um numero: "))
let opcao2 = Number(prompt("Digite um numero: "))

somar(opcao1,opcao2)
subtracao(opcao1, opcao2)
multiplicacao(opcao1,opcao2)
divisao(opcao1,opcao2)

























