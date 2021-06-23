//         exercicio 1
// a- verifica se o numero é par
// b- numeros pares
// c- numeros impares

//         exercicio 2
// a- para mostrar ao cliente o preço da fruta que ele escolher
// b- o preço das fruta maça é R$ 2.25
// c- o preço das fruta pera é R$ 5

//         exercicio 3
// a- para o usuario digitar um numero, e esta convertendo a varievel em numero
// b- 10 = esse numero passou no teste, essa mensagem é secreta -10 = nao retorna nada

//------------------------------------------------------------------------------------------------------------------------------

//         exercicio 1 codigo
let verificar = (name, numero) => {
  if(numero >= 18){
    console.log(`${name} pode dirigir`)
  }
  else{
    console.log(`${name} nao pode dirigir`)
  }

}

let nome = prompt('Digite seu nome: ')
let idade = Number(prompt("Digite sua idade: "))

verificar(nome, idade)

//         exercicio 2 codigo
let turnos = (letra) => {
  

  if (letra === "M" ){
    console.log("Bom dia")
  }
  else if (letra === "V"){
    console.log("Boa tarde")
  }
  else if (letra === "N"){
    console.log("Boa noite")
  }
  else {
    console.log("Invalido")
  }

}

let turno = prompt("Qual turno voce estuda?(M,V,N)")
turnos(turno.toUpperCase())

//         exercicio 3 codigo
let alternativo = (hora) => {

  switch (hora) {
    case "M" :
      console.log("Bom dia")
      break
    case "V" :
      console.log("Bom tarde")
      break
    case "N" :
      console.log("Bo noite")
      break    
    default:
      console.log("Invalido")  
  }


}

let horario = prompt("Qual turno voce estuda?(M,V,N)")
turnos(horario.toUpperCase())

//         exercicio 4 codigo
let filme = (gen, ingresso) => {
  if (gen === "FANTASIA" && ingresso <= 15){
    console.log("Bom filme")
  }
  else {
    console.log("Escolha outro filme")
  }

}

let genero = prompt("Qual o genero do filme?")
let preco = Number(prompt("Qual o preço do filme?"))

filme(genero.toUpperCase(), preco)
