import { Request, Response } from "express";
import BaseDatabase from "../connection";
import { LoginInputDTO, SignUpInputDTO } from "../entities/User";
import { PostLogic } from "../logic/PostLogic";
import { UserLogic } from "../logic/UserLogic";

export class UserController {

  async signup(req: Request, res: Response){

    try {
        let message = "Success!"

        const input: SignUpInputDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
  
        const userLogic = new UserLogic()
        const token = userLogic.signup(input)
  
        
  
        res.status(201).send({ message, token })
  
     } catch (error:any) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
  
        res.send({ message })
     }
  }


  async login(req: Request, res: Response){
    try {
        let message = "Success!"
  
        const input: LoginInputDTO = {
            email: req.body.email,
            password: req.body.password
        }
  
    const token = await new UserLogic().login(input)
  
        res.status(200).send({ message, token })
  
     } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
  }
  }

