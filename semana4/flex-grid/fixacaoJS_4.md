function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezes = 0
  for (let i = 0;i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      vezes = vezes + 1
    }
  }
  if(vezes>0){
    return `O número ${numeroEscolhido} aparece ${vezes}x`
}
  else if(vezes===0){
    return `Número não encontrado`
  }

    
  }