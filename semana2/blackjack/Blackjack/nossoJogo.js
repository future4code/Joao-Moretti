/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const verificar = (numUsuario, numComputador) =>{
   if (numUsuario > numComputador){
      console.log("O usuario ganhou")
}
   else if (numComputador > numUsuario) {
      console.log("O computador ganhou")
}
   else{
      console.log("Empate")
}
}

if(confirm("Quer iniciar uma nova rodada?")){
   const usuario = [comprarCarta(), comprarCarta()]
   console.log(`${usuario[0].texto} - ${usuario[1].texto}`) 
   console.log(`${usuario[0].valor} - ${usuario[1].valor}`) 

   const computador = [comprarCarta(), comprarCarta()]
   console.log(`${computador[0].texto} - ${computador[1].texto}`) 
   console.log(`${computador[0].valor} - ${computador[1].valor}`) 

   const resultadoUsuario = usuario[0].valor + usuario[1].valor
   const resultadoComputador = computador[0].valor + computador[1].valor

   console.log(`Usuario - cartas: ${usuario[0].texto}, ${usuario[1].texto} - pontuaçao ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${computador[0].texto}, ${computador[1].texto} - pontuaçao ${resultadoComputador}`)

   verificar(resultadoUsuario,resultadoComputador)
}
else{
   console.log("O jogo acabou")
}
