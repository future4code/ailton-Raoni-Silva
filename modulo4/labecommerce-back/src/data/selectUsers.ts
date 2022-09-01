import { User } from "../types"
import { connection } from "./connection"

const typeUser = (user:any) =>{
    const createUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }
    return createUser
}


export default async function selectUsers(): Promise<User[] | undefined> {

    const result = await connection("labecommerce_users")

    const allUserType = result.map((user) => {
        return typeUser(user)
    })

      
    return allUserType
    
}