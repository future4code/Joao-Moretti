//EXERCICIO 1 

//A - Serve para podermos ter ações que devem ser executadas ao criar uma instância da classe

//B - Nenhuma

//C- Através de funções Getters e Setters

type Transaction = {
    description: string,
    value: number,
    date: string
  }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }