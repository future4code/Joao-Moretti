import { PostDatabase } from "../data/PostDatabase"
import { CreatePostpInputDTO, gePostByIdpInputDTO, post, POST_TYPES } from "../entities/Post"
import { authenticationData } from "../entities/User"
import { postRouter } from "../routes/PostRouter"
import { IdGeneration } from "../services/idGeneration"
import { TokenManager } from "../services/tokenManager"

export class PostLogic {

    async createPost(input: CreatePostpInputDTO){

        try {

            const tokenManager = new TokenManager()
            const tokenData: authenticationData = tokenManager.getTokenData(input.token)

            const idGeneration = new IdGeneration
            const id: string = idGeneration.generateId()

            const post: post = {
                id,
                authorId: tokenData.id,
                createdAt: new Date(),
                description: input.description,
                photo: input.photo,
                type: input.type
            }

            await new PostDatabase().insertPost(post)
            
        } catch (error: any) {
            throw new Error(error.message)
        }


    }



    async getUserById(input: gePostByIdpInputDTO) {
        try {

            const post: post = await new PostDatabase().getPostByID(input.id)
      
            if (!post) {
               throw new Error("Post not found")
            }
      
            return post
      
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}