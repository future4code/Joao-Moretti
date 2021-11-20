import { Request, Response } from "express"
import { CreatePostpInputDTO, post } from "../entities/Post"
import { PostLogic } from "../logic/PostLogic"
import { gePostByIdpInputDTO } from "../entities/Post"

export class PostController {

    async createPost(req: Request, res: Response){
        try {
            let message = "Success!"

            const token: string = req.headers.authorization as string

            const input: CreatePostpInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token
            }

            await new PostLogic().createPost(input)
      
            res.status(201).send({ message })
      
         } catch (error:any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
      
            res.send({ message })
         }
      }


    async getPostById(req: Request, res: Response){
        try {
            let message = "Success!"
    

            const input: gePostByIdpInputDTO = {
                id: req.params.id
            }

            const post: post = await new PostLogic().getUserById(input)
      
            res.status(200).send({ message, post })
      
         } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
      
            res.send({ message })
         }
    }

}
