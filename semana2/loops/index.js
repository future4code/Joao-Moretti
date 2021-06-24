//          exercicio 1
// 10
//
//          exercicio 2
// 19,21,23,25,27,30
//nao, pois o for of acessa o conteudo do indice
//
//          exercicio 3
// *
// **
// ***
// **** 


//          exercicio 1 codigo
let pets = Number(prompt("Quantos bichos de estimaçao voce tem?"))
let nomes = []
if(pets <=0){
    console.log("Que pena!Você pode adotar um pet")
}

else if (pets > 0){
    for(let i = 0; i < pets; i++){
        const nome = [prompt("Digite os nomes:")]
        nomes.push(nome)
        
     
    
}
console.log(nomes)
}

//          exercicio 2 codigo
const imprimindoArray = (array) =>{

    for(let num of array){
        console.log(num)
    }

}

const imprimindoArray2 = (array2) =>{

    for(let num of array2){
        console.log(num / 10) 
    }

}

const arrayPar = (arrays) =>{

    for (let num of arrays){
       if(num % 2 === 0){
           console.log(num)
       }
    }

}

const string = (array3) => {

    let novoArray = []
    let outroArray = []
    for(let i=0; i<array3.length; i++){
        novoArray = [(`O elemento do index ${i} é: ${array3[i]}`)]
        outroArray.push(novoArray)
        
    }
    console.log(outroArray)

}

const maiorMenor = (array4) => {

    maiorNumero = 0
    menorNumero = 0
    for(let num of array4){

        if(num > maiorNumero){
            maiorNumero = num
        }

    }
    menorNumero = array4[0]
    for(let num of array4){

        if(num < menorNumero){
            menorNumero = num
        }
    }

    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}


const arrayOriginal = [1,2,3,4,5,]
imprimindoArray(arrayOriginal)
imprimindoArray2(arrayOriginal)
arrayPar(arrayOriginal)
string(arrayOriginal)
maiorMenor(arrayOriginal)

