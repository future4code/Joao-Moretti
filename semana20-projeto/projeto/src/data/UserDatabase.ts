import connection, { BaseDatabase } from "../connection";
import { toUserModel, user } from "../entities/User";

export class UserDatabase extends BaseDatabase{

    async insertUser(user: user){

       try{

        await this.connection('labook_users')
        .insert({
           id: user.id,
           name: user.name,
           email: user.email,
           password: user.password
        })

       }catch(error:any){
        throw new Error(error.sqlMessage || error.message)
       }
    }

    async getUserByEmail(email: string):Promise<user>{
        try {
            
            const queryResult: any = await this.connection("labook_users")
            .select("*")
            .where({ email })

            return toUserModel(queryResult[0])

            

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}