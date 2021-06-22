// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let altura = Number(prompt("Digite a altura: "))
    let largura = Number(prompt("Digite a largura: "))

    let area = altura * largura
    console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    let anoAtual = Number(prompt("Digite o ano atual: "))
    let anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"))
    let idade = anoAtual - anoDeNascimento
    console.log(idade) 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome: ")
  let idade = prompt("Digite sua idade: ")
  let email = prompt("Digite seu email: ")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua cor1 :")
  let cor2 = prompt("Digite sua cor1 :")
  let cor3 = prompt("Digite sua cor1 :")

  let array = [cor1, cor2, cor3]
  console.log(array)
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let novaString = string.toUpperCase()
  return novaString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingresso = custo / valorIngresso
  return ingresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let mesmoTamanho = string1.length === string2.length

  return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let troca
  troca = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = troca
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let palavra1 = string1.toLowerCase()
  let palavra2 = string2.toLowerCase()

  let iguais = palavra1 === palavra2
  return iguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual: "))
  let anoDeNascimento = Number(prompt("Digite o ano atual: "))
  let anoIdentidade = Number(prompt("Digite o ano atual: "))

  let idade = anoAtual - anoDeNascimento
  let carteira = anoAtual - anoIdentidade
  let um = idade<=20 && carteira >= 5 && anoIdentidade>anoDeNascimento
  let dois = idade>20 && idade <=50 && carteira >= 10 && anoIdentidade>anoDeNascimento
  let tres = idade>20 && carteira >= 15 && anoIdentidade>anoDeNascimento

  console.log(um || dois || tres)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let condicao1 = (ano % 400) === 0 
  let condicao2 = (ano % 4) === 0  && !(ano % 100 === 0  && !condicao1)

  return condicao1 || condicao2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Tem mais de 18? ")
  let ensimoMedio = prompt("Tem ensino media completo?")
  let horario = prompt("Tem horario disponivel ?")


  console.log(idade === "sim" && ensimoMedio === "sim" && horario === "sim")


}