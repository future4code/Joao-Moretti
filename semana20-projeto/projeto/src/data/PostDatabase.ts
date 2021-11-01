import BaseDatabase from "../connection";
import { post, toPostModel } from "../entities/Post";

export class PostDatabase extends BaseDatabase {

    async insertPost(post: post){
        try {

            await this.connection("labook_posts")
            .insert({
               id: post.id,
               photo: post.id,
               description: post.description,
               type: post.type,
               author_id: post.id,
               created_at: post.createdAt.toISOString().substring(0, 10)
            })

            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    async getPostByID(id: string): Promise<post> {
        try {
            
            const queryResult: any = await this.connection("labook_posts")
            .select("*")
            .where({ id })

            return toPostModel(queryResult[0])
        
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}