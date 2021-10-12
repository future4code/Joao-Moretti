import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './user';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response)=> {
    try {
        
        if(!users.length){
            res.statusCode = 404
            throw new Error("no account found")
        }

        res.status(200).send(users)

    }catch(error: any){
        res.send(error.message)
    }
    
})

app.post("/users", (req: Request, res: Response)=> {

    try {

        const {name, CPF, dateOfBirth} = req.body 

        const [day, month, year] = dateOfBirth.split("/")

        const dateOfBirthString: Date = new Date(`${year}-${month}-${day}`)

        const ageMilisseconds: number = Date.now() - dateOfBirthString.getTime() 

        const age: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365
        console.log(age)

        if( Number(age) < 18){
            res.statusCode = 406
            throw new Error("the age needs to be over 18")
        }


        users.push({
            name: name,
            CPF: CPF,
            dateOfBirth: dateOfBirthString,
            balance: 0,
            statement: []
        })

 res.status(200).send("Create Account")
    }catch (error: any){
        res.send(error.message)
    }
})




app.listen(3003, ()=> {
    console.log("Server online : port 3003")
})