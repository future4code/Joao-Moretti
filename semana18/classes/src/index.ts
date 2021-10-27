    //EXERCICIO 1 

    //A - Serve para podermos ter ações que devem ser executadas ao criar uma instância da classe

    //B - Nenhuma

    //C- Através de funções Getters e Setters

    class Transaction {

        private description: string
        private value: number
        private date: string

        constructor(description: string, value: number, date: string) {
            this.description = description
            this.value = value
            this.date = date
        }

        public GetDescription = () :string => {
            return this.description
        }

        public GetValue = () :number => {
            return this.value
        }

        public GetDate = () :string => {
            return this.date
        }

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

        public GetCpf = () :string => {
            return this.cpf
        }

        public GetName = () :string => {
            return this.name
        }

        public GetAge = () :number => {
            return this.age
        }


    }

    class Bank {
        private accounts: UserAccount[];

        constructor(accounts: UserAccount[]) {
            this.accounts = accounts;
            console.log(this.accounts)
        }

    }

    const user: UserAccount = new UserAccount("111.000.777-09", "joao", 19)
    const user2: UserAccount = new UserAccount("777.555.333-11", "jp", 20)

    console.log(user)
    console.log(user2)

