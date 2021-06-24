//          exercicio 1
// 
// Os elementos, os indices e o array inteiro juntando tudo isso
// 
//          exercicio 2
// 
//  Apenas os nomes que estao no objeto(ficarão como array)
// 
//          exercicio 3
// 
//  Irá mostrar apenas os nome sem a string "Chijo"
// -------------------------------------------------------------------------
//          exercicio 1 codigo

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArray = pets.map((item) =>  {
     return item.nome
    })
 console.log(novoArray)

 const arrayNovo = pets.filter((item) => {
     return item.raca === "Salsicha"
 })
 console.log(arrayNovo)

 const arrayNovin = pets.filter((item) => item.raca === "Poodle").map((item) =>
 {return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`}
 )
 console.log(arrayNovin)
 
 //          exercicio 2 codigo
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novo = produtos.map((item) => {
    return item.nome
 })
 console.log(novo)

 const desconto = produtos.map((item) => ({
    nome: item.nome,
    preco: item.preco * 0.95
    }))
 console.log(desconto)

 const novato = produtos.filter((item) => {
     return item.categoria === "Bebidas"
 })
 console.log(novato)

 const ipe = produtos.filter((item)=> {
     return item.nome.includes("Ypê")
 })
 console.log(ipe)

 const ipe2 = produtos.filter((item) => item.nome.includes("Ypê")).map((item) => {
return `Compre ${item.nome} por ${item.preco}`
 }
 )
 console.log(ipe2)