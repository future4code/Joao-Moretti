export type Client = {

    name: string,
    CPF: number,
    dateOfBirth: Date,
    balance: number,
    statement: Transaction[]
} 

export type Transaction = {
    value: number,
    date: Date,
    description: string
}