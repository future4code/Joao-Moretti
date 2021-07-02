function calculaPrecoTotal(quantidade) {
  let maca = 0
  let custo = 0
  for (let i=0; i<quantidade; i++){
if (quantidade < 12){
maca = 1.30
}
else{
  maca = 1
}

custo += maca
}
return custo
}