// EXERCÍCIO 01
function inverteArray(array) {
  let aux
  for (let i = 0; i<4; i++){
    for (let j = 5; j<9; j++){

      aux = array[i]
      array[i] = array[j] 
      array[j] = aux
  }

  }
return array

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let novo = []
  for(let num of array){
    if ((num % 2) === 0){

     novo.push(num * num)
  }
}
return novo
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let vazio = []
  for(let num of array){
    if ((num % 2) === 0){
      vazio.push(num)

    }
  }
return vazio
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  maior = -Infinity
  for(let num of array){
    if(num > maior){
      maior = num
    }
  }
return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 //true
 const booleano4 = !booleano3 //false

 let vetor = []

 let boo1 = booleano1 && booleano2 && !booleano4 
 let boo2 = (booleano1 && booleano2) || !booleano3
 let boo3 = (booleano2 || booleano3) && (booleano4 || booleano1)
 let boo4 = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
 let boo5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

vetor = [boo1,boo2,boo3,boo4,boo5]
return vetor

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let par = []
 
  for (let i=0; i<n*2; i++){
    if (i % 2 === 0){
    par.push(i)

    }
  }

  return par
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if(a === b && b === c && a == c){
    return 'Equilátero'
  }
  else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)){
    return 'Isósceles'
  }
  else{
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  if (num1 > num2){
    return num1
  }
  else {
    return num2
  }

  
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
