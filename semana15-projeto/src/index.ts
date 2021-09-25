import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './user';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post("/users", (req: Request, res: Response)=> {

    try {

        const {name, CPF, dateOfBirthString} = req.body 

        const [day, month, year] = dateOfBirthString.split("/")

        const dateOfBirth: Date = new Date(`${day}-${month}-${year}`)
        users.push({
            name: name,
            CPF: CPF,
            dateOfBirth: dateOfBirth,
            balance: 0,
            statement: []
        })

 res.status(200).send("Create Account")
    }catch (error){
        
    }
})




app.listen(3003, ()=> {
    console.log("Server online : port 3003")
})