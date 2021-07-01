function calculaSalario(qtdeCarrosVendidos, valorTotalVendas){ 

let salario = 2000
let novoSalario
if(qtdeCarrosVendidos > 0){
for(let i=0; i<qtdeCarrosVendidos; i++){
  salario += 100
  novoSalario = valorTotalVendas * 0.05
}
salario += novoSalario
}
else{ 
  salario=2000
}

return salario
}