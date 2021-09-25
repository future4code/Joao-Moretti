import express, { Request, Response } from "express"
import  cors  from "cors"
import { countries } from "./data"
import { country } from "./types";

const app = express()

app.use(cors()) // Evitar erros de cors em requisições
app.use(express.json()) // para quando receber um body, ele vem em json

app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})

app.get("/countries", (req: Request, res: Response)=> {

    const listCountries = countries.map((country) => {
        return {
            id: country.id,
            name: country.name
        }
    })

    res.status(200).send(listCountries)

})

app.get("/countries/search", (req: Request, res: Response)=> {
    

        let parameters: country[] = countries

  

        if(req.query.name){
             parameters = parameters.filter((country) => {
                return country.name.includes(req.query.name as string)
            })
            if(parameters.length === 0){
                res.status(400).send("caracter not found")
            }

            res.send(parameters)
        } 
        else{
            res.status(400).send("not found")
        }
    

        if(req.query.capital){
             parameters = parameters.filter((country) => {
                return country.capital.includes(req.query.capital as string)
            })

            if(parameters.length === 0){
                res.status(400).send("caracter not found")
            }

            res.send(parameters)
        } else{
            res.status(400).send("not found")
        }


        if(req.query.continent){
             parameters = parameters.filter((country) => {
                return country.continent.includes(req.query.continent as string)
            })

            if(parameters.length === 0){
                res.status(400).send("caracter not found")
            }

            res.send(parameters)
        } else{
            res.status(400).send("not found")
        }
    
})


app.get("/countries/:id", (req: Request, res: Response)=> {
    try{

        if(!Number(req.params.id)){
            throw new Error("invalid id")
        }

        const result = countries.find((country) => {
            return country.id === Number(req.params.id)
        })

        if(result){
            res.status(200).send(result)
        }
        else{
            throw new Error("id not found")
        }

    } catch(error: any) {
        res.status(400).send(error.message)
    }
})

app.post("/countries/:id", (req: Request, res: Response)=> {

    try{
    const edit: number = countries.findIndex((country) => {
        return country.id === Number(req.params.id)
    })

    if(edit === -1){
        throw new Error("Not found")
    }

    if(!req.body.name && !req.body.capital){
        throw new Error("invalid parameters")
        
    }

    if(req.body.name){
        countries[edit].name = req.body.name
    }

    if(req.body.capital){
        countries[edit].capital = req.body.capital
    }


    res.status(200).send("uptaded")
    } catch(error: any) {
        res.status(400).send(error.message)
    }
})









