let list = ["Dar aula","Criar novas aulas","Causar"]

let newList = [...list, process.argv[2]]

console.log(newList)