import connection from "../connection";
import { UserDatabase } from "../data/UserDatabase";
import { LoginInputDTO, SignUpInputDTO, user } from "../entities/User";
import { HashManager } from "../services/hashManager";
import { IdGeneration } from "../services/idGeneration";
import { TokenManager } from "../services/tokenManager";

export class UserLogic {

    async signup(input: SignUpInputDTO):Promise<string>{

        try{

            if (!input.name || !input.email || !input.password) {    
                throw new Error('"name", "email" and "password" must be provided')
             }
       
             const idGeneration = new IdGeneration()
             const id: string = idGeneration.generateId()
       
             const hashManager = new HashManager()
             const cypherPassword = await hashManager.hash(input.password);
    
             const user: user = {
                 id,
                 name: input.name,
                 email: input.email,
                 password: cypherPassword
             }

             const userDatabase = new UserDatabase()
             await userDatabase.insertUser(user)

             const tokenManager = new TokenManager
             const token: string = tokenManager.generateToken({ id })

             return token

        }catch(error:any){
            throw new Error(error.message)
            
        }

    }

    async login(input: LoginInputDTO):Promise<string>{
        try{
            if (!input.email || !input.password) {
                throw new Error('"email" and "password" must be provided')
             }
       
            const userDatabase = new UserDatabase()
            const user: user = await userDatabase.getUserByEmail(input.email) 
       
             if (!user) {
                throw new Error("Invalid credentials")
             }
       
             const hashManager = new HashManager()
             const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)
       
             if (!passwordIsCorrect) {
                throw new Error("Invalid credentials")
             }
       
             const tokenManager = new TokenManager()
             const token: string = tokenManager.generateToken({
                id: user.id
             })

             return token

        }catch(error: any){
            throw new Error(error.message)
            
        }
        
    }
}