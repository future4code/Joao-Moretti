export type Client = {

    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Transaction[]
} 

export type Transaction = {
    value: number,
    date: Date,
    description: string
}