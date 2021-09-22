const myString: string = "joao"
const myNumber: number = 19


enum color {
    VERMELHO = "vermelho",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    VIOLETA = "violeta",
    ANIL = "anil",
    LARANJA = "laranja"
}

type base = {
    name: string,
    age: number,
    favoriteColor: string
}

const person1: base = { 
    name: "joao",
    age: 19,
    favoriteColor: color.VERMELHO
}

const person2: base = { 
    name: "ivan",
    age: 20,
    favoriteColor: color.AZUL
}

const person3: base = { 
    name: "erlan",
    age: 21,
    favoriteColor: color.VERDE
}

const person4: base = { 
    name: "guilherme",
    age: 25,
    favoriteColor: color.AMARELO
}

const person: base[] = [person1, person2, person3, person4, {name: "ana", age: 20, favoriteColor: color.VIOLETA}]

console.table(person)